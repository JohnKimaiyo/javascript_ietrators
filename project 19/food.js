const array = ["rice", "salt", "maize"];

const food = array[Symbol.iterator]();

for (let value of food) { console.log(value) }