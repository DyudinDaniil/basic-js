let balance = 100;
const operations = [1000, -700, 300, -500, 10000];

function getBalance(operations, initialBalance) {
  let balance = initialBalance;
  for (const el of operations) {
    balance += el;
  }

  return balance;
}

function checkBalance(operations, initialBalance) {
  let balance = initialBalance;
  for (const el of operations) {
    balance += el;
    if (balance < 0) {
      return false;
    }
  }

  return true;
}

function averageBalance(operations) {
  let avgIncomingBalance = 0;
  let indexOfIncomingBalance = 0;

  let avgExpenditureBalance = 0;
  let indexOfExpenditureBalance = 0;

  for (const el of operations) {
    if (el > 0) {
      avgIncomingBalance += el;
      ++indexOfIncomingBalance;
    } else {
      avgExpenditureBalance += el;
      ++indexOfExpenditureBalance;
    }
  }

  avgExpenditureBalance /= indexOfExpenditureBalance;
  avgIncomingBalance /= indexOfIncomingBalance;

  return [avgExpenditureBalance, avgIncomingBalance];
}

console.log(getBalance(operations, balance));
console.log(checkBalance(operations, balance));
console.log(averageBalance(operations));