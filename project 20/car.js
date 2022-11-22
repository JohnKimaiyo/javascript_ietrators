const array = ["bmw", "mazda", "nissan"];

const car = array[Symbol.iterator]();

for (let value of car) { console.log(value) }