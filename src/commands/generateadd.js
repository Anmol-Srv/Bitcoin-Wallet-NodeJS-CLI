import { Command, Args } from '@oclif/core';
import axios from 'axios';
import * as bitcoin from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';
import { BIP32Factory } from 'bip32';
import bip39 from 'bip39';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const bip32 = BIP32Factory(ecc);

export default class GenerateAddressCommand extends Command {
    static description = 'Generate an unused Bitcoin address for a wallet';

    static args = {
        firstArg: Args.string({
            name: 'walletName',
            required: true,
            description: 'Name of the wallet'
        })
    };

    async run() {
        const { args } = await this.parse(GenerateAddressCommand);
        function ensureWalletDirectoryExists() {
            const walletDirectory = path.join(process.cwd(), 'wallets');
            if (!fs.existsSync(walletDirectory)) {
                fs.mkdirSync(walletDirectory);
            }
            return walletDirectory;
        }

        const walletDirectory = ensureWalletDirectoryExists();
        const walletFilePath = path.join(walletDirectory, `${args.firstArg}.json`);

        if (!fs.existsSync(walletFilePath)) {
            this.error('Wallet not found');
            return;
        }

        const walletData = JSON.parse(fs.readFileSync(walletFilePath, 'utf8'));
        const mnemonic = walletData.mnemonic;
        const seed = await bip39.mnemonicToSeed(mnemonic);
        const root = bip32.fromSeed(seed);
        const network = bitcoin.networks.testnet;

        const apiToken = process.env.BLOCKCYPHER_API_KEY;
        let index = walletData.lastUsedIndex !== -1 ? walletData.lastUsedIndex + 1 : 0;
        let unusedAddress;

        while (true) {
            const firstAddressNode = root.derivePath(`m/44'/1'/0'/0/${index}`);
            const { address } = bitcoin.payments.p2sh({
                redeem: bitcoin.payments.p2wpkh({
                    pubkey: firstAddressNode.publicKey,
                    network: network
                }),
            });

            const url = `https://api.blockcypher.com/v1/btc/test3/addrs/${address}/full?token=${apiToken}`;
            try {
                const response = await axios.get(url);
                if (response.data.n_tx && response.data.n_txs > 0) {
                    index++;
                } else {
                    unusedAddress = response.data.address;
                    walletData.lastUsedIndex = index;
                    fs.writeFileSync(walletFilePath, JSON.stringify(walletData, null, 2));
                    break;
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    unusedAddress = response.data.address;;
                    walletData.lastUsedIndex = index;
                    fs.writeFileSync(walletFilePath, JSON.stringify(walletData, null, 2));
                    break;
                } else {
                    this.error(`Error checking address: ${error.message}`);
                    return;
                }
            }
        }

        this.log(`Generated unused address: ${unusedAddress}`);
    }
}
