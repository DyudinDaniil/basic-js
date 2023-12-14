const prices = [[100, 200], [120, 100], [200, 350]];

const positiveChanges = prices
  .filter(price => price[1] >= price[0])
  .map(price => price[1] - price[0]);

console.log(positiveChanges);