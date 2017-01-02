// Array copying examples
const players = ["Able", "Baker", "Charlie", "Delta"];

// only creates reference, modifying it alters original
const team1 = players;

// Four ways to copy array and not just reference
// #1 - Use slice()
const team2 = players.slice();

// #2 - Create new array and concat
const team3 = [].concat(players);

// #3 - Use spread operator
const team4 = [...players];

// #4 - Use Array.from
const team5 = Array.from(players);

console.log(team1);
console.log(team2);
console.log(team3);
console.log(team4);
console.log(team5);

// const addItems = document.querySelector('.add-items');
// const itemsList = document.querySelector('.plates');
// const items = [];
