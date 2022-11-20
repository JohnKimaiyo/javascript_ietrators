const array = ['ruby', 'python', 'java'];

const it = array[Symbol.iterator]();

for (let value of it) { console.log(value) }

