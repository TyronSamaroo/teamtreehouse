/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pets = [
  {
    'name': 'Bulldozer',
    'type': 'Dog',
    'breed': 'aussie',
    'age': 2,
    'photo': 'img/aussie.jpg'
  },
  {
    'name': 'Albers',
    'type': 'Dog',
    'breed': 'pug',
    'age': 4,
    'photo': 'img/pug.jpg'
  },
  {
    'name': 'Frankie',
    'type': 'Dog',
    'breed': 'dachshund',
    'age': 5,
    'photo': 'img/dachshund.jpg'
  },
  {
    'name': 'Taco',
    'type': 'Dog',
    'breed': 'golden',
    'age': 1,
    'photo': 'img/golden.jpg'
  },
  {
    'name': 'Henri',
    'type': 'Cat',
    'breed': 'persian',
    'age': 3,
    'photo': 'img/persian.jpg'
  },
  {
    'name': 'Toby',
    'type': 'Cat',
    'breed': 'tabby',
    'age': 3,
    'photo': 'img/tabby.jpg'
  },
];


/*
1. Itterate thru pets 
2. Start building HTML

Easy: 
Each contents like this
H1 -> Name
H2 -> Type
H2 -> Preed 
H2 -Age
IMG -
I 
*/
function createCard ( pet ){
  return `
  <div class="card">
  <p class="name"> ${pet.name} </p>
  <img src=${pet.photo} >
  <p>Type: ${pet.type}</p>
  <p>Breed: ${pet.breed}</p>
  <p>Age: ${pet.age}</p>
  </div>
  `
}

let cardsHTML = '';
for ( let i = 0; i < pets.length; i++ ){
  let pet = pets[i];
  let card = createCard(pet);
  cardsHTML += card;


}
console.log(cardsHTML)
let mainElement = document.querySelector('main');
mainElement.insertAdjacentHTML('beforeend', cardsHTML);