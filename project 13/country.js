const array = ["canana", "france", "italy"];

const country = array[Symbol.iterator]();

for (let value of country) { console.log(value) }