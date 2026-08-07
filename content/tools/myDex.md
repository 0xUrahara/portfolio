---
title: "myDex - Decentralized Exchange"
date: 2026-08-07
draft: flase
tags:
  - "Solidity"
  - "React"
  - "Web3"
  - "DeFi"
github: "https://github.com/0xUrahara/myDex"
---

## 📋 Overview

**myDex** is a fully functional Decentralized Exchange (DEX) built for the Ethereum blockchain. It allows users to seamlessly swap ERC-20 tokens, manage buy/sell orders, and interact with their MetaMask wallet directly through a responsive React frontend.

This project represents my foundation in Full-Stack Blockchain Development and serves as a practical study ground for smart contract security and DeFi architecture.

---

## 🛠️ Core Features

- **Token Swapping**: Trustless ERC-20 to ERC-20 token swaps via custom liquidity pools.
- **Order Management**: Real-time charting, trade history, and active buy/sell order tracking.
- **Web3 Integration**: Seamless MetaMask wallet connection and transaction signing.
- **Responsive UI**: Built with React/Next.js for a smooth, modern user experience.

---

## 💻 Tech Stack

- **Smart Contracts**: Solidity, Hardhat, OpenZeppelin
- **Frontend**: React.js, Next.js, Ethers.js / Web3.js
- **Testing**: Hardhat testing framework, Chai
- **Deployment**: Ethereum Testnets (Sepolia/Goerli)

---

## 🔒 Security Considerations

As I transition into Application Security, this project serves as a living lab for secure smart contract development. Key security practices implemented and studied include:
- **Reentrancy Guards**: Utilizing OpenZeppelin's `ReentrancyGuard` to prevent state manipulation during external calls.
- **Access Control**: Strict `Ownable` and role-based permissions for administrative functions.
- **Integer Overflow/Underflow**: Leveraging Solidity 0.8.x+ built-in checks or SafeMath for older versions.
- **Front-Running Mitigation**: Studying slippage tolerance and commit-reveal schemes for order execution.

---

*Built to understand the architecture of DeFi, and now being hardened to secure it.*
