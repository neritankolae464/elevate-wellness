/* 
   FILENAME: ComplexCode.js

   DESCRIPTION: This complex JavaScript code is designed to simulate a virtual pet game.
                The program generates a virtual pet with various attributes and allows the user
                to interact with the pet by feeding, playing, and putting it to sleep.
                The code also includes a random event generator and a leveling system for the pet.
*/

class VirtualPet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.hunger = 50;
    this.energy = 100;
    this.happiness = 50;
    this.level = 1;

    // Function to check and update pet's status
    this.updateStatus = function() {
      if (this.hunger <= 0 || this.energy <= 0 || this.happiness <= 0) {
        console.log(`${this.name} has passed away... Game Over!`);
        clearInterval(statusCheckInterval);
      } else if (this.hunger <= 20 || this.energy <= 20 || this.happiness <= 20) {
        console.log(`${this.name} needs attention!`);
      }
    };

    // Function to feed the pet
    this.feedPet = function() {
      if (this.hunger >= 100) {
        console.log(`${this.name} is already full!`);
      } else {
        this.hunger += 10;
        console.log(`${this.name} has been fed! Hunger: ${this.hunger}`);
      }
    };

    // Function to play with the pet
    this.playWithPet = function() {
      if (this.energy <= 50) {
        console.log(`${this.name} doesn't have enough energy to play!`);
      } else {
        this.energy -= 20;
        this.happiness += 10;
        console.log(`${this.name} is playing with you! Energy: ${this.energy}, Happiness: ${this.happiness}`);
      }
    };

    // Function to put the pet to sleep
    this.putPetToSleep = function() {
      if (this.energy >= 100) {
        console.log(`${this.name} is already well-rested!`);
      } else {
        this.energy += 30;
        console.log(`${this.name} is sleeping! Energy: ${this.energy}`);
      }
    };
  }

  // Function to generate a random event for the pet
  generateRandomEvent() {
    const randomEvent = Math.floor(Math.random() * 4) + 1;

    switch (randomEvent) {
      case 1:
        console.log(`${this.name} found a treat while playing! Hunger +10`);
        this.hunger += 10;
        break;
      case 2:
        console.log(`${this.name} got sick... Energy -20, Happiness -10`);
        this.energy -= 20;
        this.happiness -= 10;
        break;
      case 3:
        console.log(`${this.name} is feeling lonely... Happiness -10`);
        this.happiness -= 10;
        break;
      case 4:
        console.log(`${this.name} is getting stronger! Level +1`);
        this.level += 1;
        break;
      default:
        console.log(`${this.name} is behaving normally.`);
    }
  }
}

// Create a new virtual pet object
const myPet = new VirtualPet("Buddy", "Dog");

// Timer to update pet's status every 10 seconds
const statusCheckInterval = setInterval(() => {
  myPet.updateStatus();
}, 10000);

// Interact with the virtual pet
myPet.feedPet();
myPet.playWithPet();
myPet.putPetToSleep();
myPet.generateRandomEvent();