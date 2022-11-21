const array = ["ruby", "rust", "java"];

const code = array[Symbol.iterator]();

for (let value of code) { console.log(value) }