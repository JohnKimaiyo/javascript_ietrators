const array = ["manu", "liv", "mancity", "tot"];

const team = array[Symbol.iterator]();

for (let value of team) {
    console.log(value)
}