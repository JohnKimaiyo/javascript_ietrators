const array = ["london", "juja", "juba"];

const cities = array[Symbol.iterator]();

for (let value of cities) {
  console.log(value);
}
