const array = ["kenya", "uganda", "canada"];

const country = array[Symbol.iterator]();

for (let value of country) {
  console.log(value);
}
