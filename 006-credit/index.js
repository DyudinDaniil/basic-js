function computeCredit(age, hasJob = false) {
  switch (true) {
    case age > 24 && hasJob:
      return 500;
      break;
    case age > 24:
      return 100;
      break;
    default:
      return 0;
  }
}

function canBuy(productPrice, money, age, hasJob = false) {
  if ((money + computeCredit(age, hasJob)) >= productPrice) {
    console.log('Я могу купить это)');
  } else {
    console.log('Я не могу купить это(');
  }
}

canBuy(2000, 1900, 30, false);