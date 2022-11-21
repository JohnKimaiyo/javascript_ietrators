const array = ["mon", "tue", "wed"];

const day = array[Symbol.iterator]();

for (let value of day) { console.log(value) }