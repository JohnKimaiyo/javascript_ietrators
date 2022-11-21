const array = ["bmw", "honda", "nissan"];

const car = array[Symbol.iterator]();

for (let value of car) { console.log(value) }