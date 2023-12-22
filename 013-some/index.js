const arr = [2, 4, 4, 10, 20];

function some(arr, findEl) {
  const res = arr.findIndex(el => el === findEl);
  return res >= 0 ? true : false;
}

console.log(some(arr, '2'));