const array = ['mazda', 'toyota', 'honda'];

const it = array[Symbol.iterator]();

for (let value of it) { console.log(value) }

