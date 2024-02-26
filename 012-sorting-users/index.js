const usersArray = [
    {name: 'Mark', age: 20},
    {name: 'Max', age: 29},
    {name: 'Andrew', age: 40},
    {name: 'Ann', age: 18},
    {name: 'Sonya', age: 35},
    {name: 'Masha', age: 33}
];

console.log(
    usersArray.sort((firstUser, secondUser) => firstUser.age - secondUser.age)
);