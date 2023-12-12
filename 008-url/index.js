const url = 'https://purlschool.ru/couse/javascript';
const arr = url.split('/');

let [protocol, _, domen, ...path] = arr;
protocol = protocol.slice(0, -1);
path = path.join('/');


console.log(protocol, domen, path);