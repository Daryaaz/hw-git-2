let expenses = [
    { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { expenses: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { expenses: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ];

let filteredExpences = [];
for (let selected of expenses){
    filteredExpences.push(...selected.expenses.filter((value) => {return value > 1000} ))
}


function calculation(array){
    let sum = 0;
    for (let value of array){
        sum += value;
    }
    return sum
}

let expensesSum = calculation(filteredExpences);
console.log(`All expences sum is: ${expensesSum}`)

let sumTest = 0
for (let selected of expenses){
    selected.expenses.forEach( value => {
        if (value > 1000) {
            sumTest += value;
        }
    }) 
}

console.log(`Test function:  ${sumTest}`);

sumTest === expensesSum
? console.log(`Verification successful`)
: console.log(`Verification failed`)