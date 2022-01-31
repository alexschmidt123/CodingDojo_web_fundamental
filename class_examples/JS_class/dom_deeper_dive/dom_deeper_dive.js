var title = document.querySelector('#title');
var box = document.getElementById('box');
var counter =0;

function display(element) {
    console.log(element.innerText);
}

function changeText(element) {
    element.innerText  = "You clicked me."
}

function changeBg () {
    title.style.backgroundColor="green";
}

function hoverOver(element){
    element.style.backgroundColor="rebeccapurple"
}

function hoverOut (element) {
    counter++;
    box.innerText = counter;
}

function changePic(element) {
    var temp = element.src;
    element.src = element.getAttribute('altsrc');
    element.setAttribute('altsrc',temp);
    console.log(element);
}