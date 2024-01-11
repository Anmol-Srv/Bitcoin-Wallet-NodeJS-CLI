# Bitcoin Wallet CLI

## Overview
Bitcoin Wallet CLI is a sophisticated Node.js command-line interface for managing Bitcoin wallets. It allows users to interact with the Bitcoin testnet for various wallet operations, utilizing BIP39 and BIP44 standards.

## Features
- **Wallet Creation**: Generate a new BIP39 mnemonic wallet.
- **Wallet Import**: Import a wallet using a BIP39 mnemonic.
- **Wallet Listing**: List all locally stored wallets.
- **Balance Checking**: Retrieve and display the balance of a wallet.
- **Transaction History**: Show all transactions of a wallet.
- **Address Generation**: Generate an unused Bitcoin address for a wallet.

## Installation and Setup
### Prerequisites
- Node.js (Version 12 or higher)
- npm (Node Package Manager)

### Installation Steps
Clone the repository and install dependencies:
```
git clone [https://github.com/Anmol-Srv/Bitcoin-wallet-cli.git](https://github.com/Anmol-Srv/Bitcoin-Wallet-NodeJS-CLI/tree/main)
cd bitcoin-wallet-cli
npm install
```

## Usage Instructions
- **Create Wallet**: This command generates a new wallet with a BIP39 mnemonic.
  ```
  node \bin\run create < WALLET_NAME >
  ```
- **Import Wallet**:  Import an existing wallet using a BIP39 mnemonic.
  ```
  node \bin\run import "< MNEMONIC >" < WALLET_NAME >
  ```
 
- **List Wallets**: List all wallets stored locally.
  ```
  node \bin\run list
  ```

- **Check Balance**:   Retrieve the balance of the specified wallet.
  ```
  node \bin\run balance < WALLET_NAME >
  ```
  
- **View Transactions**: Display transaction history for the specified wallet.
  ```
  node \bin\run transactions < WALLET_NAME >
  ```
  
- **Generate Address**:  Generate an unused Bitcoin address for the specified wallet.
  ```
  node \bin\run generate < WALLET_NAME >
  ```
## Testing the Project
- A sample wallet named ```testWallet``` has been added to the wallets directory for testing purposes. This wallet includes a transaction, providing a practical example for testing the project's functionality.


## File Structure
- `src/commands/create.js`: Logic for creating new wallets.
- `src/commands/import.js`: Handles wallet imports.
- `src/commands/list.js`: Lists all wallets.
- `src/commands/balance.js`: Fetches the balance of a wallet.
- `src/commands/transactions.js`: Retrieves transaction history.
- `src/commands/generate.js`: Generates new addresses.

## Testing
Use the Bitcoin Testnet for testing. Testnet faucets can provide test bitcoins for your wallets.

## License
Distributed under the MIT License. See `LICENSE` for more information.
