const array = ["paris", "rome", "juba"];

const cities = array[Symbol.iterator]();

for (let value of cities) { console.log(value) }