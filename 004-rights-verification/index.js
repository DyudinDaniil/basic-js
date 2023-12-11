const balance = 100;
const bonusBalance = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;

if ((balance >= 1000 || bonusBalance >= 100) && !isBanned && !isExist && isSelling) {
  console.log('Я могу купить эту игру!');
} else {
  console.log('Я не могу купить эту игру');
}