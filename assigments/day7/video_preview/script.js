console.log("page loaded...");
//I had tried to use js function to control video preview, but failed. 
//All related functions had been integrated in HTML, this js file is useless.
var x = document.querySelector("video");

function over(element) {
    x.muted = true;
    x.play();  
}
    
function out(element) {
    x.pause();  
}