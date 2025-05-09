import { expect } from "chai";
import { describe, it } from "mocha";
import { reduceDirections } from "./niveau2.js";

describe("Supprimer les directions qui sont opposés et réduire le plan au maximum", function () {
    it("Doit retourner ouest, si l'entrée est nord,sud,sud,est,ouest,nord,ouest ", function () {
      expect(reduceDirections(["NORD","SUD","SUD","EST","OUEST","NORD","OUEST"])).to.deep.equal(["OUEST"]);
    });

    it("Doit retourner un tableau vide, si toutes les directions s'annulent ", function () {
        expect(reduceDirections(["NORD","SUD","EST","OUEST"])).to.deep.equal([]);
      });

      it("Doit retourner [nord ouest], si l'entrée [est nord,sud,sud,est,ouest,nord,ouest,nord] ", function () {
        expect(reduceDirections(["NORD","SUD","SUD","EST","OUEST","NORD","OUEST","NORD"])).to.deep.equal(["OUEST","NORD"]);
      });

      it("Doit retourner [est ,sud], si l'entrée est [nord,sud,sud,est,ouest,nord,est,sud] ", function () {
        expect(reduceDirections(["NORD","SUD","SUD","EST","OUEST","NORD","EST","SUD"])).to.deep.equal(["EST", "SUD"]);
      });   

      it("Doit retourner un tableau vide, si le tableau est vide ", function () {
        expect(reduceDirections([])).to.deep.equal([]);
      });
  });
