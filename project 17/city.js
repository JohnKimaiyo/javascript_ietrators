const array = ["paris", "tokyo", "juba"];

const city = array[Symbol.iterator]();

for (let value of city) { console.log(value) }