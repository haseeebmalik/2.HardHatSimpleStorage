// require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-chai-matchers");
// require ("@nomiclabs/hardhat-ethers");
// require("dotenv").config()
// require("@nomiclabs/hardhat-etherscan");
// require("./tasks/block-number")
// require("hardhat-gas-reporter")
// require("solidity-coverage")
/** @type import('hardhat/config').HardhatUserConfig */

// for ts we need to convert require in import
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
import "dotenv/config"
import "@nomiclabs/hardhat-etherscan";
import "./tasks/block-number";
import "hardhat-gas-reporter"
import "solidity-coverage"
import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"



const GOERLI_RPC_URL=process.env.GOERLI_RPC_URL || ""
const PRIVATE_KEY=process.env.PRIVATE_KEY || ""
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY || ""
const COINMARKETCAP_API_KEY=process.env.COINMARKETCAP_API_KEY || ""

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli :{
     url:GOERLI_RPC_URL,
     accounts:[PRIVATE_KEY],
     chainId:5,
    },
    localhost:{
      url:"http://127.0.0.1:8545/",
      //accounts:Thanks to hardhat
      chainId:31337
    }
  },
  solidity: "0.8.7",
  etherscan: {
    apiKey:ETHERSCAN_API_KEY,
  },

  gasReporter: {
    enabled:true,
    outputFile:"gas-reporter.txt",
    noColors:true,
    currency:'USD',
    coinmarketcap:COINMARKETCAP_API_KEY,
    //now we give token of a particular network so to get the gas price of a particular network, you will get 
    //token from hardhat-gas-reporter npm  docs.

    // token:"MATIC"
  }

};
