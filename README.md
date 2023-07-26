# FMCG Supply Chain Application using Blockchain

## Overview
Welcome to our FMCG Supply Chain Application! This decentralized application (DApp) is designed to enhance transparency and traceability in the fast-moving consumer goods supply chain using blockchain technology. With the power of Ethereum and the security of smart contracts, manufacturers, suppliers, and customers can collaborate in a trustless environment to track the lifecycle of products from creation to consumption.

## Table of Contents
1. [Installation](#installation)
2. [How it Works](#how-it-works)
3. [Smart Contract Details](#smart-contract-details)
4. [Try It Out](#try-it-out)
5. [Contact](#contact)

## 1. Installation <a name="installation"></a>
To use our FMCG Supply Chain Application, follow these steps:

1. [Clone the Repository](#clone-the-repository): Clone this repository to your local machine using `git clone https://github.com/your-username/your-repo.git`

2. [Install Dependencies](#install-dependencies): Navigate to the project directory and install the necessary dependencies using `npm install`

3. [Deploy Smart Contract](#deploy-smart-contract): Deploy the `Goodschain.sol` smart contract to the Ethereum-Sepolia blockchain using tools like Remix or Truffle.

4. [Connect Frontend to Smart Contract](#connect-frontend-to-smart-contract): In the frontend code, update the contract address and ABI to interact with the deployed smart contract.

5. [Build and Run](#build-and-run): Build the frontend application and start the development server with `npm start`

6. [Access the Application](#access-the-application): Access the FMCG Supply Chain Application by visiting `http://localhost:3000` in your web browser.

## 2. How it Works <a name="how-it-works"></a>
The application is built on the Ethereum-Sepolia blockchain and comprises three user roles: Manufacturer, Supplier, and Customer.

### Manufacturer
- As a manufacturer, you can add a new product to the supply chain by providing details like product name, category, certificate, and initial state information.
- Each product registered by the manufacturer is assigned a unique product ID and gets recorded on the Ethereum blockchain.
- A QR code is generated and imprinted on the product, containing the product's ID and other relevant information.

### Supplier
- Suppliers play a crucial role in updating the state of the products they handle in the supply chain.
- Using the application, suppliers can scan the QR code on a product and update its information on the blockchain.
- This update includes information such as the current state of the product, its location (latitude and longitude), and any additional details.

### Customer
- Customers have the ability to track the lifecycle of a product by scanning the QR code printed on the packaging.
- By scanning the code, customers can view the entire history of the product, from its origin with the manufacturer to its current state.

## 3. Smart Contract Details <a name="smart-contract-details"></a>
The underlying smart contract, named `Goodschain`, is developed in Solidity, the language for writing smart contracts on Ethereum. The contract consists of the following components:

### Structs

1. `Locate`: Represents the geographical location with latitude and longitude.

2. `State`: Represents the state of a product at a specific time, including the modifier's address, date, location (`Locate` struct), and additional information.

3. `Product`: Represents a single product with details such as the creator's address, product name, category, certificate, a unique product ID, and an array of `State` objects for maintaining the product's history.

### Functions

1. `newItem`: Allows a manufacturer to register a new product on the blockchain with initial state information.

2. `addState`: Enables suppliers to update the state of a product by providing additional information and geographic coordinates.

3. `searchProduct`: Allows customers to track the lifecycle of a product by providing its product ID. It returns an array of `State` objects representing the product's history.


