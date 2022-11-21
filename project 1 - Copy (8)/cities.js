const array = ["london", "juba", "tokyo"];
const cities = array[Symbol.iterator]();

for (let value of cities) {
  console.log(value);
}
