var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
// Conditional statement - starts with the "if" keyword
// Another way for us to contract the FLOW of ourcode
// The keyword is followed by a BOOLEAN statement. If the statement resolves to true, then we excute the conditional's CODE BLOCK.

if(isSunny) {
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);
