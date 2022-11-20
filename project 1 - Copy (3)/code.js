const array = ["java", "python", "ruby"];

const code = array[Symbol.iterator]();

for (let value of code) {
  console.log(value);
}
