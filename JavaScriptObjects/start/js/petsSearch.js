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

  // Function to display all pets
function displayAllPets() {
    clearGallery();
  
    for (let i = 0; i < pets.length; i++) {
      let pet = pets[i];
      let card = createCard(pet);
      addCardToGallery(card);
    }
  }
  
  function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
  }
  
  function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
  }
  
  function filterPets(searchTerm) {
    return pets.filter(pet => pet.type.toLowerCase().includes(searchTerm));
  }
  
  function clearGallery() {
    document.getElementById('pet-gallery').innerHTML = '';
  }
  
  function createCard(pet) {
    return `<div class="card">
      <p class="name">${pet.name}</p>
      <img src="${pet.photo}" alt="${pet.breed}">
      <p><strong>Age:</strong> ${pet.age}</p>
      <p><strong>Type:</strong> ${pet.type}</p>
      <p><strong>Breed:</strong> ${pet.breed}</p>
    </div>`;
  }
  
  function addCardToGallery(card) {
    document.querySelector('#pet-gallery').insertAdjacentHTML('beforeend', card);
  }
  
  // Call the function when the page loads
  displayAllPets();
  document.getElementById('search').addEventListener('input', function(e) {
    showSpinner();
  
    setTimeout(function() {
      let searchTerm = e.target.value.toLowerCase();
      let filteredPets = filterPets(searchTerm);
      
      clearGallery();
      
      for (let i = 0; i < filteredPets.length; i++){
        let pet = filteredPets[i];
        let card = createCard(pet);
        addCardToGallery(card);
      }
  
      hideSpinner();
    }, 2000);
  });