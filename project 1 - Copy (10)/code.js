const array = ["python", "java", "ruby"];

const car = array[Symbol.iterator]();

for (let value of car) {
  console.log(value);
}
