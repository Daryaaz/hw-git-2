let receiver = {
    balance: 100,
    parcelCost: 100,
    receivedCode: "A001DFX0",
}
const parcelMachine = [null, null, null, "A001DFX0", null];

for(let i=0; i<parcelMachine.length; i++){
    if(parcelMachine[i] === receiver.receivedCode) {
        receiver.balance = receiver.balance - 100
        console.log(`You have received parcel from cell Nr.4. 
        Your balance is ${receiver.balance}`);
    } else {
        console.log("Invalid code");
    }
        
}

// if (balance>=parcelCost){
//     if(receivedCode==enteredCode){
//         balance-=parcelCost;
//         console.log(`You have received parcel from cell Nr.4. 
//         Your balance is ${balance}`);
//     }else{
//         console.log("Invalid code")
//     }
// }
