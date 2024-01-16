function toPower(num, power) {
  const res = num ** power;
  return res;
}

const toPowerArrow = (num, power) => num ** power;

console.log(toPower(4, 3));
console.log(toPowerArrow(4, 3));