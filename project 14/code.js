const array = ["ruby", "java", "rust"];

const code = array[Symbol.iterator]();

for (let value of code) { console.log(value) }