const array = ["java", "ruby", "rust"];

const code = array[Symbol.iterator]();

for (let value of code) { console.log(value) }