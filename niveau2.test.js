import { expect } from "chai";
import { describe, it } from "mocha";
import { countMaxBobsleigh } from "./niveau2.js";

describe("Compte le nombre maximum de bobsleigh", function () {
  it("Doit retourner 3, si l'entrée contient TROIS 4 points successifs ", function () {
    expect(
      countMaxBobsleigh(5, [
        "....X",
        "....",
        "X....",
        "X...X",
        "..X..",
      ]).to.be.equal(3)
    );
  });


  it("Doit retourner 0, si l'entrée contient N est inférieur à 4 ", function () {
    expect(countMaxBobsleigh(3, ["....X", "....", "X...."]).to.equal(0));
  });

  it("Doit retourner 2, si N=8 et une ligne ne contient pas d'arbres ", function () {
    expect(
      countMaxBobsleigh(8, [
        ".X.X.X.X",
        ".X.X.X.X",
        ".X.X.X.X",
        "........",
        "X..X.X.",
        "X.X.X..X",
        "..X..XXX",
        "XXXXXXXX",
      ]).to.equal(2)
    );
  });

  it("Doit retourner 0, si les lignes ne contiennent que des arbres", function () {
    expect(
      countMaxBobsleigh(5, [
        "XXXXX",
        "XXXXX",
        "XXXXX",
        "XXXXX",
        "XXXXX",
      ]).to.equal(0)
    );
  });
});
