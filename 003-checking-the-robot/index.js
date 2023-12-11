const userInput = prompt('Сколько будет 7 + или - 15?');
switch (userInput) {
  case '22':
  case '-8':
  case 'Я не робот':
    console.log('Успех');
    break;
  default:
    console.log('Ты робот');
}