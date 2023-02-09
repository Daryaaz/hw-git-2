let expensesArray = [
    { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390]},
    { expenses: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200]},
    { expenses: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000]},
  ];
  
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                        'August', 'September', 'October', 'November', 'December'];
  
  function monthlyExpenses(arr) {
      arr.forEach((e, index) => {
      if (e <= 1000) {
      let month = new Date(2023, index).getMonth();
      console.table(months[month])
      }
    });
  }
  
  for (let i=0; i < expensesArray.length; i++){
    console.log(`Months of array Nr. ${i+1} with expences 1000 or less:`)
    monthlyExpenses(expensesArray[i].expenses);
  }