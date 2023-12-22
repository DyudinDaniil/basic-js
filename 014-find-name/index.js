const userName = 'Alex aka Dark Stalker228 Pupkin';

const arr = userName.split(' ');
const [name, secondName] = [arr[0], arr[arr.length - 1]];

console.log(`${name} ${secondName}`);