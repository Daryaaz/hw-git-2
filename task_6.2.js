function increaseBalance(x, y) {
    return x += y;
  }
  console.log(increaseBalance(3000, 700));
  

  function decreaseBalance(x, y) {
  return x -= y;
  }
  console.log(decreaseBalance(3000, 700));


  
  function divideBalanceByAccounts(x, y, c) {
    return (x += y) /c
  }
  console.log(divideBalanceByAccounts(3000, 4000, 2));
  
  
  function getRestAfterDivision(x, y) {
    return x %= y;
  }
  console.log(getRestAfterDivision(7000, 3))