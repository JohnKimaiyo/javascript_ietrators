const array = ['mazda',"bmw","toyota"];

const car = array[Symbol.iterator]();

for(let value of car){console.log(value)}