// JavaScript Objects
// What are they even?

// JS Objects are like object IRL. They have characteristics, and things they can do.
// Car
// Characteristics: make, model, numDoors, numWheels, etc.
// Things that it can do: drive, beep, etc.

// In JS, characteristics are called properties, and the things it can do are called methods.

console.log("hello world");
var array = [1, 2, 3, 4, 5, 'blue', true, null];
console.log(array.length);
console.log(typeof array);

// Making objects from scratch
// Object Literal Notation
// key-value pairs

var myCar = {
  "make": "Jeep",
  "model": "Wrangler",
  "year": 2020,
  "beepHorn": function (){
    console.log('beep beep!');
  }
}

// get and set
// get values using dot notation
console.log(myCar.model);

// set values using dot notation
myCar.make = "Toyota";
console.log(myCar.make);

// get values using bracket notation
console.log(myCar['model']);

// set values using dot notation
myCar['model'] = "Corolla";

myCar.beepHorn();