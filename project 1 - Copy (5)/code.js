const array = ['python','java','ruby'];

const code = array[Symbol.iterator]();

for(let value of code){console.log(value)}