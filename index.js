// Object copying - same reference vs. copy issues
const person = {
  name: 'Darth Vader',
  favoriteColor: 'Black'
}

// Creates reference not copy just like array
const sithLord = person;
sithLord.allegiance = "Dark Side";
console.log(sithLord);
console.log(person);

// const addItems = document.querySelector('.add-items');
// const itemsList = document.querySelector('.plates');
// const items = [];
