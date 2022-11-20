const array = ["mazda",'bmw',"tokyo"];
const car = array[Symbol.iterator]();

for(let value of car){console.log(value)}