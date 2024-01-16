const url = 'https://purpleschool.ru/course/javascript';

const arr = url.split('/');
const [protocol, _, host, ...path] = arr;

console.log(`Протокол: ${protocol}`);
console.log(`Доменное имя: ${host}`);
console.log(`Путь внутри сайта: /${path.join('/')}`);