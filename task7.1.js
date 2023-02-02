let balance = 100;
let parcelCost = 100;
let receivedCode = "A001DFX0";
let enteredCode = "A001DFX0";
let parcelMachine = [null, null, null, '4-yourparcel', null];

if (balance>=parcelCost){
    if(receivedCode==enteredCode){
        balance-=parcelCost;
        console.log(`You have received parcel from cell Nr.4. 
        Your balance is ${balance}`);
    }else{
        console.log("Invalid code")
    }
}
