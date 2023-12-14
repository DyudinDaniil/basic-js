const arr = [2, 4, 4, 10];

const avg = arr.reduce((acc, value, index) => {
  acc += value;
  if (index == arr.length - 1) {
    acc /= arr.length;
  }

  return acc;
}, 0);

console.log(avg);