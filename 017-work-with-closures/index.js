'use strict';

// const userInfo = {
//     balance: 0,
//     operations: 0,
//     increase(sum) {
//         this.balance += sum;
//         this.operations++;
//     }
// }

function newUserClouser() {
    const newUser = {
        balance: 0,
        operations: 0,
        increase(sum) {
            this.balance += sum;
            this.operations++;
        }
    };

    return function() {
        return newUser;
    }
}

const user1 = newUserClouser();
const user2 = newUserClouser();

user1().increase(200);
user1().increase(100);
user1().increase(2000);

user2().increase(200);
user2().increase(50);
user2().increase(-500);

console.log(`${user1().balance} ${user1().operations}`);
console.log(`${user2().balance} ${user2().operations}`);