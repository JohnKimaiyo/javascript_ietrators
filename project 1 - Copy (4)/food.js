const array = ["bean", "rice", "meat"];

const food = array[Symbol.iterator]();

for (let value of food) {
  console.log(value);
}
