const array = ["london","tokyo","kampala"];

const cities = array[Symbol.iterator]();

for(let value of cities){console.log(value)}