const array = ["ruby", "python", "honda"];

const code = array[Symbol.iterator]();

for (let value of code) {
  console.log(value);
}
