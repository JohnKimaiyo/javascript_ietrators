const array = ["manu", "mancity", "liv"];

const team = array[Symbol.iterator]();

for (let value of team) { console.log(value) }