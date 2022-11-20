const array = ['london', 'tokyo', 'kampala'];

const it = array[Symbol.iterator]();

for (let value of it) { console.log(value) }

