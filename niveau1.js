export function getLastDelegation  (delegations = []) {
  let nom = [];
  let delegationsDansTable = [];
  let arrives = [];
  let arrive = Number;
  for (let i = 0; i < delegations.length; i++) {
    delegationsDansTable.push(delegations[i].split(" "));
    for (let j = 0; j < delegations[i].length; j++) {}
  }
  for (let j = 0; j < delegationsDansTable.length; j++) {
    nom.push(delegationsDansTable[j][0]);
    arrive = delegationsDansTable[j][1] / delegationsDansTable[j][2];
    arrives.push(arrive);
  }
  for (let k = 0; k < nom.length; k++) {
    if (arrives.indexOf(Math.max(...arrives)) === nom.indexOf(nom[k])) {
      return nom[k];
    }
  }
};