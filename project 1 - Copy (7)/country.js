const array = ["kenya", "canada", "uk"];

const country = array[Symbol.iterator]();

for (let value of country) {
  console.log(value);
}
