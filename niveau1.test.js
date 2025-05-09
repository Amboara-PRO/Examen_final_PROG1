import { expect } from "chai";
import {describe,it} from "mocha";
import { getLastDelegation } from "./niveau1.js"

describe("quelle delegation aura l'honneur de cloturer la ceremonie",function(){
    it("should be return Estonia if input is ['Chili 101 2','Estonia 58 1','Romania 102 3','Ecuator 103 4','madagascar 104 5','Oman 50 1',Nicaragua 51 3','Yemen 53 4']",function(){
        expect(getLastDelegation(['Chili 101 2','Estonia 58 1','Romania 102 3','Ecuator 103 4','madagascar 104 5','Oman 50 1','Nicaragua 51 3','Yemen 53 4'])).to.equal("Estonia")
    })
    it("should be return Chili if input is ['Chili 101 2','Romania 102 3','Ecuator 103 4','madagascar 104 5']",function(){
        expect(getLastDelegation(['Chili 101 2','Romania 102 3','Ecuator 103 4','madagascar 104 5']))
    }).to.equal("Chili")
})