const arr = [1, 4, 4, 10];

const res = arr.reduce((acc, el, index) => {
    acc += el;

    if (index === arr.length - 1) {
        return acc / (arr.length);
    }

    return acc;
}, 0)

console.log(res);