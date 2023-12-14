const arrowPow = (pow) => (num) => num ** pow;

const powerOfTwo = arrowPow(2);
console.log(powerOfTwo(3));
console.log(powerOfTwo(4));
console.log(arrowPow(4)(5));