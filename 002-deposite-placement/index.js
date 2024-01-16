const deposit = 10000;
const rate = 0.07;
const houseCost = 13500;
const years = 2;

const res = deposit * (1 + rate / 12) ** (years * 12);

if (res >= houseCost) {
  console.log(`Я могу купить дом и у меня еще останется ${res - houseCost}$`);
} else {
  console.log(`Я не могу позволить себе дом, мне не хватает ${houseCost - res}$`);
}