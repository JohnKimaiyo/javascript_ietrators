const array = ["london", "tokyo", "paris"];
const cities = array[Symbol.iterator]();
for (let value of cities) { console.log(value) }