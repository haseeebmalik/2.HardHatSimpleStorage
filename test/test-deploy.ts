// const { ethers } = require("hardhat")
// const { expect, assert } = require("chai")

//In ts you need to add import

import {ethers} from "hardhat"
import {expect, assert} from "chai"
import {SimpleStorage,SimpleStorage__factory} from "../typechain-types"

//describe is a key word which hardhat and mocha knows for test.
describe("SimpleStorage", function () {
    //we will first need to deploy contract before each test.
    let simpleStorageFactory:SimpleStorage__factory
    let  simpleStorage:SimpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await (ethers.getContractFactory("SimpleStorage")) as SimpleStorage__factory
        simpleStorage = await simpleStorageFactory.deploy()
    })

    //first test
    it("Should start with a favourite number of 0", async function () {
        const currentValue = await simpleStorage.retrive()
        const expectedValue = "0"

        //both assert and expect do the same thing , but with some syntax difference
        //assert
        //expect
        assert.equal(currentValue.toString(), expectedValue)

            //or

        // expect(currentValue.toString().to.equal(expectedValue))
    })
    //second test
     it("Should update when we call store",async function(){
        const expectedValue="7";
        const transactionResponse=await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue=await simpleStorage.retrive()
        assert.equal(currentValue.toString(),expectedValue)
     })
    
})
