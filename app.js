
  // Create Dino Constructor


  // Create Dino Objects


  // Create Human Object

  // Use IIFE to get human data from form


  // Create Dino Compare Method 1
  // NOTE: Weight in JSON file is in lbs, height in inches. 

    
  // Create Dino Compare Method 2
  // NOTE: Weight in JSON file is in lbs, height in inches.

    
  // Create Dino Compare Method 3
  // NOTE: Weight in JSON file is in lbs, height in inches.


  // Generate Tiles for each Dino in Array
  
      // Add tiles to DOM

  // Remove form from screen


// On button click, prepare and display infographic


//===================================================//
// const form = document.getElementById("dino-compare");
// console.log(form);

// Obtaining the value of the inputs 
// const name = document.getElementById("name").value;
// console.log(name);
// const height = document.getElementById("feet");
// console.log(height);
// const weight = document.getElementById("weight");
// console.log(weight);
// const diet = document.getElementById("diet");
// console.log(diet);

const button = document.getElementById("btn");
// console.log(button);

// Dino constructor
class Dinosaurs {
  constructor(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
  }
}
// Dino objects
const triceratops = new Dinosaurs("Triceratops", 13000, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh");
// console.log(triceratops);
const tyrannosaurusRex = new Dinosaurs("Tyrannosaurus Rex", 11905, 144, "carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.");
// console.log(tyrannosaurusRex);
const anklyosaurus = new Dinosaurs("Anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.");
// console.log(anklyosaurus);
const brachiosaurus = new Dinosaurs("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.");
// console.log(brachiosaurus);
const stegosaurus = new Dinosaurs("Stegosaurus", 11600, 79, "herbavor", "North America  Europe, Asia", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.");
// console.log(stegosaurus);
const elasmosaurus = new Dinosaurs("Elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.");
// console.log(elasmosaurus);
const pteranodon = new Dinosaurs("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.");
// console.log(pteranodon);
const pigeon = new Dinosaurs("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.");
// console.log(pigeon);

// Obtaining the value of the inputs 
// const name = document.getElementById("name").value;
// console.log(name);
// const height = document.getElementById("feet");
// console.log(height);
// const weight = document.getElementById("weight");
// console.log(weight);
// const diet = document.getElementById("diet");
// console.log(diet);
// Human object
/*
(humanInfo = function(humanName, humanHeight, humanWeight,   humanDiet) {
    const human = {
      humanName,
      humanHeight,
      humanWeight,
      humanDiet
    };
    // console.log(human);
})();
humanInput("Pablo", 125, 12, "omnivor");
*/
/*
const humanInput = function(human) {
  const name = document.getElementById("name").value;
  document.getElementById("dino-compare").innerHTML = name;
  console.log(name);
  const human = {
    this.name: name,
  };
}


const humanInputs = function() {
  const human = {
    humanName,
    humanHeight,
    humanWeight,
    humanDiet
  };
  
}();

*/


