const array = ["mazda","honda","bmw"];

const car = array[Symbol.iterator]();

for(let value of car){console.log(value)}