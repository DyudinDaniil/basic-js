const num1 = '87777777777';
const num2 = '+77777777777';
const num3 = '8 777 777 77 77';
const num4 = '+7 (777) 777 77-77';

const num5 = '87777777777abc';
const num6 = '+7777777777712345';
const num7 = '1 777 777 77 77';
const num8 = '+7_(777)a777 77-77';

const checkingTheNumber = (num) => {
    num = num.trim();
    num = num.replace('+7', '8');
    num = num.replaceAll('-', '');
    num = num.replaceAll('(', '');
    num = num.replaceAll(')', '');
    num = num.replaceAll(' ', '');

    if ((num.length === 11) && (num.startsWith('8')) && !(isNaN(Number(num)))) {
        return true;
    }

    return false;
}

console.log(checkingTheNumber(num1));
console.log(checkingTheNumber(num2));
console.log(checkingTheNumber(num3));
console.log(checkingTheNumber(num4));

console.log(checkingTheNumber(num5));
console.log(checkingTheNumber(num6));
console.log(checkingTheNumber(num7));
console.log(checkingTheNumber(num8));