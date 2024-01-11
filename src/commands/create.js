import { Args, Command } from '@oclif/core';
import bip39 from 'bip39';
import fs from 'fs';
import path from 'path';

export default class CreateWalletCommand extends Command {
  static description = 'Create a new BIP39 Wallet';

  static args = {
    firstArg: Args.string(
      {
        name: 'name',
        required: true,
        description: 'name of wallet',
        hidden: false,
      }
    ),
  };

  async run() {
    const { args } = await this.parse(CreateWalletCommand);

    if (!args.firstArg) {
      this.error('You must specify a name for the wallet');
      return;
    }

    

    const mnemonic = bip39.generateMnemonic();
    const walletData = { mnemonic , lastUsedIndex : -1};
    function ensureWalletDirectoryExists() {
      const walletDirectory = path.join(process.cwd(), 'wallets');
      if (!fs.existsSync(walletDirectory)) {
        fs.mkdirSync(walletDirectory);
      }
      return walletDirectory;
    }
    const walletDirectory = ensureWalletDirectoryExists();
    const walletFilePath = path.join(walletDirectory, `${args.firstArg}.json`);

    if (fs.existsSync(walletFilePath)) {
      this.error('A wallet with this name already exists locally.');
      return;
    }

    fs.writeFileSync(walletFilePath, JSON.stringify(walletData, null, 2));
    this.log(`Wallet ${args.firstArg} created successfully at ${walletFilePath}`);
  }
}
