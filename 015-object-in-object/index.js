const company = {
    name: 'Google',
    employees: [
        {
            name: 'Dan',
            getName: function() {
                console.log(this.name);
            }
        }
    ],
    ceo: {
        name: 'Sergey',
        getName: function() {
            console.log(this.name);
        }
    },
    getName: function() {
        console.log(this.name);
    }
}