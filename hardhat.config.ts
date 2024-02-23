import dotenv from "dotenv"
dotenv.config()

import "@nomicfoundation/hardhat-toolbox"
import { HardhatUserConfig } from "hardhat/config"

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "local",
  networks: {
    local: {
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
      },
    },
    sepolia: {
      url: process.env.INFURA_URL,
      chainId: 11155111,
      accounts: {
        mnemonic: process.env.METAMASK_SECRET,
      },
    },
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: {
        mnemonic: process.env.METAMASK_SECRET,
      },
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
  sourcify: {
    enabled: true,
  },
}

export default config
