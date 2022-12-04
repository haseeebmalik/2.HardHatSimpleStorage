// const {task} =require("hardhat/config")

//For ts you have to add import

import {task} from "hardhat/config"

export default task("block-number","Prints the current block number").setAction(
 //here hre is "hardhat runtime environment" ,and give us same functions as we get from importing hardhat
    async(taskArgs,hre)=>{
       const blockNumber=await hre.ethers.provider.getBlockNumber()
       console.log(`current block number:${blockNumber}`)
    }  
)

// module.exports={}