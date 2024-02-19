const prices = [[100, 200], [120, 100], [200, 350]];

const res = prices
    .map(price => price[1] - price[0])
    .filter(changes => changes > 0);

console.log(res)