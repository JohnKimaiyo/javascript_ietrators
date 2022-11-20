const array = ["london", "tokyo", "kampla"];

const code = array[Symbol.iterator]();

for (let value of code) {
  console.log(value);
}
