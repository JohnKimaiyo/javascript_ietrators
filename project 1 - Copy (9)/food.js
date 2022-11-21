const array = ["maize", "beans", "rice"];

const car = array[Symbol.iterator]();
for (let value of car) {
  console.log(value);
}
