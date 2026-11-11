function calculateTotal(){
 
let drinkPrice =
document.getElementById("drink").value;
 
let quantity =
document.getElementById("quantity").value;
 
let total =
drinkPrice * quantity;
 
document.getElementById("result").innerHTML =
"Total Price: $" + total;
}