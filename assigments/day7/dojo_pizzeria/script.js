



function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

//2 more pizzas
var p3 = pizzaOven("deep dish", "marinara", ["mozzarella", "feta"], ["mushrooms", "sausage", "onions"]);
console.log(p3);

var p4 = pizzaOven("hand tossed", "traditional", "feta", ["mushrooms", "pepperoni"]);
console.log(p3);

//bonus

// crustType:    
var ct = ["deep dish", "hand tossed"];
//sauceType
var st = ["traditional", "marinara"];
//cheeses:
var ch = ["mozzarella", "feta"];
//toppings: 
var tp = ["mushrooms", "olives", "onions", "pepperoni", "sausage"];

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function coin_random() {
    var x = Math.random();
    var type = Math.floor(2*x);
    return type;
};

function item_random(arr) {
    var temp = arr;
    for (var i=0; i<arr.length; i++){
        if (coin_random()==0){
            arr.pop(arr[i]);
        }
    }
    if (arr.length==0){
        var x = Math.random();
        var item = Math.floor(x*temp.length);
        
        arr.push(temp(item));
    }
    return arr;
}

var p5 = pizzaOven(ct[coin_random()], st[coin_random()], item_random(ch), item_random(tp));
console.log(p5);