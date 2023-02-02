let balance = 100;
let transactionAmount = 100;
let receivedСode = "A001DFX0";
let enteredСode = "A001DFX0";
let postomatCellContent = '4 - your parcel';
let postomat = [null, null, null, postomatCellContent, null];

if (balance >= transactionAmount) 
  if (receivedСode == enteredСode) {
    balance -= transactionAmount;
    console.log(`You have received parcel from cell Nr. ${postomat.indexOf(postomatCellContent) + 1} Your bank balance is: ${balance}RUB.`);
  } else {
    console.log("Invalid code");
  }

