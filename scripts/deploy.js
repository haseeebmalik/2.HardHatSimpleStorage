const { ethers,run,network } = require("hardhat")
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying contract...")
    const simpleStorage=await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()

    console.log(`Deployed contract to:${simpleStorage.address}`)

    //here we only verify the contract if it is a goerli network
   if(network.config.chainId===5 && process.env.ETHERSCAN_API_KEY){
    //we will wait for atleast six blocks after the transaction,so that we get the good result
    console.log("waiting blocs txes...")
    await simpleStorage.deployTransaction.wait(6)  
    
    await verify(simpleStorage.address,[])
   }
   //Now we intrect with the contract we deployed by calling its functions

   const currentValue=await simpleStorage.retrive()
    console.log(`Current value is:${currentValue}`)

     //update current value
     const transactionResponse=await simpleStorage.store("7")
     await transactionResponse.wait(1)
     const updatedValue=await simpleStorage.retrive()
     console.log("updatedValue:",updatedValue)
}
//the args in parameter is constructor arguments if exist
async function verify(contractAddress,args){
   console.log("Verifying contract...")
   try {
    await run("verify:verify",{
        address:contractAddress,
        constructorArguments:args,
    })
   } catch (err){
    if(err.message.toLowerCase().includes("already varified")){
        console.log("Already Verified!")
    } else {
        console.log("err",err)
    }
      
   }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log("error", error)
        process.exit(1)
    })
