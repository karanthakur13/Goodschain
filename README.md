# FMCG Supply Chain Application using Blockchain

Welcome to our FMCG Supply Chain Application! This decentralized application (DApp) is designed to enhance transparency and traceability in the fast-moving consumer goods supply chain using blockchain technology. With the power of Ethereum and the security of smart contracts, manufacturers, suppliers, and customers can collaborate in a trustless environment to track the lifecycle of products from creation to consumption.

## How it Works

The application is built on the Ethereum blockchain and comprises three user roles: Manufacturer, Supplier, and Customer.

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

## Smart Contract Details

The underlying smart contract, named `Goodschain`, is developed in Solidity, the language for writing smart contracts on Ethereum. The contract consists of the following components:

### Structs

1. `Locate`: Represents the geographical location with latitude and longitude.

2. `State`: Represents the state of a product at a specific time, including the modifier's address, date, location (`Locate` struct), and additional information.

3. `Product`: Represents a single product with details such as the creator's address, product name, category, certificate, a unique product ID, and an array of `State` objects for maintaining the product's history.

### Functions

1. `newItem`: Allows a manufacturer to register a new product on the blockchain with initial state information.

2. `addState`: Enables suppliers to update the state of a product by providing additional information and geographic coordinates.

3. `searchProduct`: Allows customers to track the lifecycle of a product by providing its product ID. It returns an array of `State` objects representing the product's history.

## How to Use the Application

To use our FMCG Supply Chain Application, follow these steps:

1. **Manufacturer**: Access the application using your Manufacturer login credentials. Add new products to the supply chain, and a unique QR code will be generated for each product.

2. **Supplier**: Login as a Supplier and scan the QR code on the product's packaging. Update the product's state and add relevant information, such as its current location.

3. **Customer**: As a Customer, scan the QR code on the product you purchased to view its entire lifecycle, including its origin, updates from suppliers, and other relevant information.


