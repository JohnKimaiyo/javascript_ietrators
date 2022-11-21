const array = ["python", "ruby", "java"];
const code = array[Symbol.iterator]();
for (let value of code) {
  console.log(value);
}
