const array = ["tokyo", "kampala", "london"];

const cities = array[Symbol.iterator]();

for (let value of cities) {
  console.log(value);
}
