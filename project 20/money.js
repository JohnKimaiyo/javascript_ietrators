const array = ["dolla", "yen", "pound"];

const money = array[Symbol.iterator]();

for (let value of money) { console.log(value) }