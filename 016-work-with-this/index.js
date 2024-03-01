'use strict';

const user = {
    userName: 'Dan',
    userPassword: '1234'
}

function removePassword(reset) {
    if (reset) {
        this.userPassword = undefined;
    } else {
        this.userPassword = this.userPassword;
    }
}

const resetUserPassword = removePassword.bind(user, true);
console.log(user);
resetUserPassword();
console.log(user);