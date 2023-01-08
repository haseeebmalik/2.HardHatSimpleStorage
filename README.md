# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```





Hardhat Development Environment:

1.Flexible javascript based development environment to compile, deploy, test and debug evm based smart contracts.
2.Enables easy integration of code and external tools.
3.Local hardhat Network to simulate Ethereum.
4.Extensible plugin features.
5.High level of debugging features.


after installing hardhat ,

1.you can run command "npx hardhat help",it will show you all the commands availble in hardhat
2.if you dont specify on which network you want to depoly the contract ,by default it will deploy on hardhat test network.
3.you can also specifically ask to deploy on hardhat test network by writting this command:
    first you need to compile the contract:
    npx hardhat compile
    then,run below comment by giving network you want to deploy on
    npx hardhat run scripts/deploy.js --network hardhat

        or 
  if you dont want to compile just delete artifacts and cache folder and just run npx hardhat run scripts/deploy.js --network hardhat
   it will automatically compile the contract it above two folders are not there.

   You can delete compiled folders by command: npx hardhat clean


to check the arguments taken by a hardhat command we use : npx hardhat <cmdname> --help

    NETWORKS:

We can give networks to hardhat.config.js file with their credentials like this:

     goerli :{
     url:GOERLI_RPC_URL,
     accounts:[PRIVATE_KEY],
     chainId:5,
    },
In this way you can connect with any network ,with just command: npx hardhat run scripts/deploy.js --network goerli 


    HARDHAT TASKS: 

   we can add tasks in hardhat, and run them as other hardhat commands,
  for that you have to make task, as made in 2.HardHatSimpleStorage tasks folder, then export it and import it in hardhat.config.js file
  
 According to patric tasks are for plugins while scripts are for local development.

    HARDHAT CONSOLE:
we can also interect with any blockchain with hardhat console,by command:
    npx hardhat console --network <networkName>
 In hardhat console we dont need to require ethers or other stuf from hardhat, because its already there.


   RUNNING TESTS:

  After writing test in our test.deploy.js file, now we have some ways to run tests:
   1.npx hardhat test (it will run all the tests in our test.deploy.js inside out test folder.)
   2.yarn hardhat test --grep store (it will run only test which have "store keyword in its sting before function")
   3.if we write only keyword with "it" like (it.only("test name",async function(){   }) (it will run only this test not the others) 
      
   HARDHAT GAS REPORTER:
 Through this we can get the detail about how much gas our functions will cost,we will get this when we run tests.
 First install the npm package, then add some lines in hardhat.config.js file.
 Then we need to add coinmarketcap to get the gas price in doller, and we have to add its api keys in config file.
 We can get its api keys from after making the account on its website i.e https://pro.coinmarketcap.com/ .


   SOLIDITY COVERAGE:  

     It will show us that which lines in solidity file is not covered by test.


       First install solidity-coverage and addd them in hardhat.config.js
       then run "npx hardhat coverage"
  it will create a coverage.json file and coverage folder, so also add that files in .gitignore file.

  HARDHAT WAFFLE: 

  This is also for really amaizing testing.



  TYPESCRIPT:

 You can either make a typescript hardhat project from start,or make a js hardhat project into a ts project.
 For this you need to install some deps ,as given in the end of lesson 6 in patric bootcamp github repo.
 Then convert your deploy.js file into deploy.ts,also hardhat.config.js file into hardhat.config.ts file.
 Then make a new file with name tsconfig.json , and add some content in it as i do.


  Now you also want to give type to your contract, so for that you have to install typechain plugin and then also add them 
 in out hardhat.config.js file, so that we can get the hardhat command for it.
 
  Now you have a hardhat command for it, now run:
    npx hardhat typechain 

 So that you have typing folder for your contract and contract factory.
 Now import the files in test-deploy.ts . and proceed further

 


