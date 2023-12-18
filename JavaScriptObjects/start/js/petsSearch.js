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
  
  // Loop through the array and create HTML for each object
  // document.getElementById('search').addEventListener('input', function(e) {
  //   let searchTerm = e.target.value.toLowerCase(); // Convert search term to lowercase
  //   let filteredPets = pets.filter(pet => pet.type.toLowerCase().includes(searchTerm)); // Convert pet type to lowercase
    
  //   document.getElementById('pet-gallery').innerHTML = ''; // Clear the gallery
    
  //   for (let i = 0; i < filteredPets.length; i++){
  //     let pet = filteredPets[i];
  //     let card = `<div class="card">
  //     <p class="name">${pet.name}</p>
  //     <img src="${pet.photo}" alt="${pet.breed}">
  //     <p><strong>Age:</strong> ${pet.age}</p>
  //     <p><strong>Type:</strong> ${pet.type}</p>
  //     <p><strong>Breed:</strong> ${pet.breed}</p>
  //   </div>`
  //     document.querySelector('#pet-gallery').insertAdjacentHTML('beforeend', card);
  //   }
  // });
  
  
  document.getElementById('search').addEventListener('input', function(e) {
    console.log('Input event triggered'); // Check if the event is triggered
    document.getElementById('spinner').style.display = 'block'; // Show the spinner
  
    setTimeout(function() {
      let searchTerm = e.target.value.toLowerCase(); // Convert search term to lowercase
      console.log('Search term:', searchTerm); // Check the search term
      let filteredPets = pets.filter(pet => pet.type.toLowerCase().includes(searchTerm)); // Convert pet type to lowercase
      console.log('Filtered pets:', filteredPets); // Check the filtered pets
      
      document.getElementById('pet-gallery').innerHTML = ''; // Clear the gallery
      
      for (let i = 0; i < filteredPets.length; i++){
        let pet = filteredPets[i];
        console.log('Processing pet:', pet); // Check each pet
        let card = `<div class="card">
        <p class="name">${pet.name}</p>
        <img src="${pet.photo}" alt="${pet.breed}">
        <p><strong>Age:</strong> ${pet.age}</p>
        <p><strong>Type:</strong> ${pet.type}</p>
        <p><strong>Breed:</strong> ${pet.breed}</p>
      </div>`
        document.querySelector('#pet-gallery').insertAdjacentHTML('beforeend', card);
      }
  
      document.getElementById('spinner').style.display = 'none'; // Hide the spinner when done
    }, 2000); // Delay of 2 seconds
  });


