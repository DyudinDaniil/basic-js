const deposite = 10000
const rate = 0.07;
const depositeTime = 24;
const housePrice = 13500;

const res = deposite * (1 + rate / 12) ** depositeTime;

if (res >= housePrice) {
  console.log(`Я могу купить дом и у меня останется ${res - housePrice}$`);
} else {
  console.log(`Я не могу купить дом, мне не хватает ${housePrice - res}$`);
}