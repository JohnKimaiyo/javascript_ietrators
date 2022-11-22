const array = ["paris", "tokyo", "rome"];

const cities = array[Symbol.iterator]();

for (let value of cities) { console.log(value) }