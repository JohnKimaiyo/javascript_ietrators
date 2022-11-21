const array = ["maize", "beans", "rice"];

const code = array[Symbol.iterator]();

for (let value of code) { console.log(value) }