const array = ['kenya', 'ghana', 'uk'];

const it = array[Symbol.iterator]();

for (let value of it) { console.log(value) }

