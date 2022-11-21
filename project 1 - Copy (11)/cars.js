const array = ["mazda", "bmw", "honda"];
const car = array[Symbol.iterator]();

for (let value of car) {
  console.log(value);
}
