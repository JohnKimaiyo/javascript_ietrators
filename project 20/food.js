const array = ["rice", "salt", "beans"];
const food = array[Symbol.iterator]();

for (let value of food) { console.log(value) }