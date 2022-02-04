var profit_name = document.getElementById("profit_name")
var counter =0;
function changeName(){
    profit_name.innerHTML = "Alex Schmidt";
    }
//     if (counter&2 == 0){
//         profit_name.innerHTML = "Alex Schmidt";
//     }
//     else{
//         profit_name.innerHTML = "Jane Deo";
//     }
//     counter++;   
// }

var request1 = document.getElementById("request1");
var request2 = document.getElementById("request2");
var number1 = document.getElementById("number1");
var number_c =document.getElementById("number_c");

function remove_decrease1(){
    request1.remove();
    number1.innerText--;
    
}
function remove_decrease2(){
    request2.remove();
    number1.innerText--;
}


function add(){
    number_c.innerText++;
}