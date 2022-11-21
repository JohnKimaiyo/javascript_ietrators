const array = ["maize", "bean", "rice"];

const food = array[Symbol.iterator]();

for (let value of food) { console.log(value) }