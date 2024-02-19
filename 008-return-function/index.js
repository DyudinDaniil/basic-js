function power(pow) {
    return function (num) {
        return num ** pow;
    }
}

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(3));

const powerOfThree = power(3);
console.log(powerOfThree(5));
console.log(powerOfThree(3));

const powerArrow = (pow) => (num) => num ** power;

const powerArrowOfTwo = power(2);
console.log(powerOfTwo(5) === powerArrowOfTwo(5));
console.log(powerOfTwo(3) === powerArrowOfTwo(3));