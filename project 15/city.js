const array = ["rome", "paris", "juja"];

const city = array[Symbol.iterator]();

for (let value of city) { console.log(value) }