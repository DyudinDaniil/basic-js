const wallet = {
    balance: 0,
    operations: [],
    increase: function(reason, sum) {
        this.balance += sum;
        this.operations.push({reason: reason, sum: sum});
        return true;
    },
    decrease: function(reason, sum) {
        this.balance -= sum;

        if (this.balance >= 0) {
            this.operations.push({reason: reason, sum: -sum});
            return true;
        }

        return false;
    },
    countOfOperaions: function() {
        return this.operations.length;
    }
};

console.log(wallet.increase('salary', 3000));
console.log(wallet.decrease('tax', 200));
console.log(wallet.decrease('car', 20000));
console.log(wallet.increase('prize', 2000));
console.log(wallet.countOfOperaions());