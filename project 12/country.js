const array = ["kenya", "canada", "dubai"];

const code = array[Symbol.iterator]();

for (let value of code) { console.log(value) }