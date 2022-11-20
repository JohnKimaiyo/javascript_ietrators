const array = ['bean', 'rice', 'meat'];

const it = array[Symbol.iterator]();

for (let value of it) { console.log(value) }

