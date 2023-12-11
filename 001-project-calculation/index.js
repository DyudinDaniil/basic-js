const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

if (availableHours > projectHours) {
  const money = payRateUSD * projectHours;
  console.log("Я получу " + money + " за проект:)");
} else {
  console.log("У меня нет времени на выполнение данного заказа:(");
}