const array = ["kenya","ghana","uk"];

const country = array[Symbol.iterator]();

for(let value of country){console.log(value)}