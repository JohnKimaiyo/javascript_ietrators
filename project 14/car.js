const array = ["mazda", "toyota", "honda"];

const car = array[Symbol.iterator]();

for (let value of array) { console.log(value) }