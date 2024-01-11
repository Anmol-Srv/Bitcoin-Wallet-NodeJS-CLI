// Updated list.js with specific directory
import { Command } from '@oclif/core';
import fs from 'fs';
import path from 'path';

export default class ListWalletsCommand extends Command {
    static description = 'List all stored wallets';

    async run() {
        const walletDirectory = path.join(process.cwd(), 'wallets');
        function ensureWalletDirectoryExists() {
            const walletDirectory = path.join(process.cwd(), 'wallets');
            if (!fs.existsSync(walletDirectory)) {
                fs.mkdirSync(walletDirectory);
            }
            return walletDirectory;
        }
        if (!fs.existsSync(walletDirectory)) {
            this.log('No wallets directory found');
            return;
        }

        fs.readdir(walletDirectory, (err, files) => {
            if (err) {
                this.error('Error reading wallets directory');
                return;
            }

            const walletFiles = files.filter(file => file.endsWith('.json'));
            if (walletFiles.length === 0) {
                this.log('No wallets found');
                return;
            }

            this.log('Stored Wallets:');
            walletFiles.forEach(file => {
                this.log(`- ${file}`);
            });
        });
    }
}
