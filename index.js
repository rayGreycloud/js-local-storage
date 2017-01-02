// Object copying - same reference vs. copy issues
const person = {
  name: 'Darth Vader',
  favoriteColor: 'Black'
}

// Creates reference not copy just like array
// const sithLord = person;
// sithLord.allegiance = "Dark Side";
// console.log(sithLord);
// console.log(person); // now has allegiance property too

// Making a copy of Object (but only 1 lvl deep)
const sithLord = Object.assign({}, person, {allegiance: 'Dark Side', social: {}});
console.log(sithLord);
console.log(person); // remains unchanged

sithLord.social.twitter = '@darthvader';
// Hack to clone Object
const anakin = JSON.parse(JSON.stringify(sithLord));
console.log(anakin);

// const addItems = document.querySelector('.add-items');
// const itemsList = document.querySelector('.plates');
// const items = [];
