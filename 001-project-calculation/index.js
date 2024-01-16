const payRateUSD = 80;
const projectHours = 40;
const freeDays = 9;

const res = freeDays * 5 - projectHours;

if (res >= 0) {
  console.log(`Я берусь за работу и получу ${projectHours * payRateUSD}`);
} else {
  console.log('Я не успею выполнить эту работу');
}