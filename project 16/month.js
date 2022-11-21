const array = ["jan", "feb", "mar"];

const month = array[Symbol.iterator]();

for (let value of month) { console.log(value) }