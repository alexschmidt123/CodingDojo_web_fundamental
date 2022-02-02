// HTML - Structure
// CSS - Style
// JavaScript - Functionality

// The Document Object Model - DOM
// What is the DOM?
// The DOM is our page as an object.

// alert("This is coming from script.js");

var title = document.querySelector('#title');
console.log(title);
title.innerHTML = "This text has been coopted by your new JavaScript Overlords THROUGH 'id'."

var footer =  document.querySelector('.footer');
console.log(footer);
footer.innerHTML = "This text has been coopted by your new JavaScript Overlords THROUGH 'class'."

function disappear(element){
  element.remove();
}