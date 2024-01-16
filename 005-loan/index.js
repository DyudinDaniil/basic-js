const age = 20;
const hasJob = true;
const money = 2800;
const costOfMac = 2000;

const getLoan = (age, hasJob) => {
  let res = 0;

  if (age > 24 && hasJob) {
    res = 500;
  } else if (age > 24 && !hasJob) {
    res = 100;
  }

  return res;
}

const canBuy = (age, hasJob, money, cost) => {
  if ((money + getLoan(age, hasJob)) >= cost) {
    console.log('Я могу позволить себе это');
  } else {
    console.log('Я не могу позволить себе это');
  }
}

canBuy(age, hasJob, money, costOfMac);