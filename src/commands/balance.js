import { Command, Args } from '@oclif/core';
import axios from 'axios';
import bip39 from 'bip39';
import * as bitcoin from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';
import { BIP32Factory } from 'bip32';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const bip32 = BIP32Factory(ecc);

export default class GetBalanceCommand extends Command {
  static description = 'Get the Bitcoin balance of a wallet';

  static args = {
    firstArg: Args.string({
      name: 'walletName',
      required: true,
      description: 'Name of the wallet'
    })
  };

  async run() {
    const { args } = await this.parse(GetBalanceCommand);

    function ensureWalletDirectoryExists() {
      const walletDirectory = path.join(process.cwd(), 'wallets');
      if (!fs.existsSync(walletDirectory)) {
        fs.mkdirSync(walletDirectory);
      }
      return walletDirectory;
    }

    const walletDirectory = ensureWalletDirectoryExists();

    if (!fs.existsSync(walletDirectory)) {
      fs.mkdirSync(walletDirectory);
    }
    const walletFilePath = path.join(walletDirectory, `${args.firstArg}.json`);

    if (!fs.existsSync(walletFilePath)) {
      this.error('Wallet not found');
      return;
    }

    const walletData = JSON.parse(fs.readFileSync(walletFilePath, 'utf8'));

    const mnemonic = walletData.mnemonic;

    const seed = await bip39.mnemonicToSeed(mnemonic);

    const root = bip32.fromSeed(seed);

    const firstAddressNode = root.derivePath("m/44'/1'/0'/0/0");

    const network = bitcoin.networks.testnet;

    const { address } = bitcoin.payments.p2sh({
      redeem: bitcoin.payments.p2wpkh({
        pubkey: firstAddressNode.publicKey,
        network: network
      }),
    });

    const apiToken = process.env.BLOCKCYPHER_API_KEY;

    const url = `https://api.blockcypher.com/v1/btc/test3/addrs/${address}/balance?token=${apiToken}`;

    try {
      const response = await axios.get(url);
      this.log(`Balance: ${response.data.balance} Satoshis`);
    } catch (error) {
      this.error(`Error: ${error.message}`);
    }
  }
}
