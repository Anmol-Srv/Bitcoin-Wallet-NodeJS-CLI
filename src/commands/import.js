// import.js
import { Command, Args } from '@oclif/core';
import bip39 from 'bip39';
import fs from 'fs';
import path from 'path';

export default class ImportWalletCommand extends Command {
  static description = 'Import a BIP39 Wallet using a mnemonic';

  static args = {
    firstArg: Args.string({
      name: 'mnemonic',
      required: true,
      description: 'BIP39 Mnemonic'
    }),
    secondArg: Args.string({
      name: 'walletName',
      required: true,
      description: 'Name for the wallet'
    })
  };

  async run() {
    const { args } = await this.parse(ImportWalletCommand);

    if (!bip39.validateMnemonic(args.firstArg)) {
      this.error('Invalid BIP39 Mnemonic');
      return;
    }

    function ensureWalletDirectoryExists() {
      const walletDirectory = path.join(process.cwd(), 'wallets');
      if (!fs.existsSync(walletDirectory)) {
        fs.mkdirSync(walletDirectory);
      }
      return walletDirectory;
    }
    const walletDirectory = ensureWalletDirectoryExists();
    const walletFilePath = path.join(walletDirectory, `${args.secondArg}.json`);

    fs.writeFileSync(walletFilePath, JSON.stringify(args.firstArg, null, 2));
    this.log(`Wallet imported successfully as ${args.firstArg}`);
  }
}
