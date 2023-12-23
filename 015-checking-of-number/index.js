const num1 = '87777777777';
const num2 = '+77777777777';
const num3 = '8 777 777 77 77';
const num4 = '+7(777) 777-77-77';

const wrongNum1 = '97777777777';
const wrongNum2 = '+7777777777777';
const wrongNum3 = '8 777 abc 77 77';
const wrongNum4 = '+10(777) ((()))777-77-77';

function isNumber(num) {
  num = num.trim();
  num = num.replace('+7', '8');
  num = num.replaceAll(' ', '');
  num = num.replaceAll('(', '');
  num = num.replaceAll(')', '');
  num = num.replaceAll('-', '');

  if (num.startsWith('8') && num.length === 11 && !isNaN(Number(num))) {
    return true;
  }
  return false;
}

console.log(isNumber(num1));
console.log(isNumber(num2));
console.log(isNumber(num3));
console.log(isNumber(num4));

console.log(isNumber(wrongNum1));
console.log(isNumber(wrongNum2));
console.log(isNumber(wrongNum3));
console.log(isNumber(wrongNum4));