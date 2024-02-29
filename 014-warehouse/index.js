const warehous = {
    goods: [],
    addGood: function(good) {
        if (this.goods.find(el => el.id === good.id)) return;
        this.goods.push(good);
    },
    findGoodById: function(id) {
        for (good of this.goods) {
            if (good.id == id) {
                return good;
            }
        }

        return false;
    },
    getWeight: function() {
        const arrOfWeight = this.goods.map(good => good?.weight?.kg);
        return arrOfWeight.reduce((acc, sum) => {return acc += sum ? sum : 0}, 0);
    }
}

const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
}

const chair = {
    id: 2,
    weight: {
        kg: 4
    }
}

const paper = {
    id: 3,
    color: 'red'
}

warehous.addGood(car);
warehous.addGood(chair);
warehous.addGood(paper);
warehous.addGood(car);
warehous.addGood(chair);
warehous.addGood(paper);
console.log(warehous.goods);

console.log(warehous.findGoodById(1));
console.log(warehous.findGoodById(2));
console.log(warehous.findGoodById(3));
console.log(warehous.findGoodById(4));

console.log(warehous.getWeight());