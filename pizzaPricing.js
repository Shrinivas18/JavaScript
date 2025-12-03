/*
You are tasked with creating a program to calculate the price of a pizza based on its size, quantity and selected toppings.

Objectives
Pizza Size and Base Price:
The base price of the pizza depends on its size, which can be small, medium, or large.
small: $8.00
medium: $10.00
large: $12.00
Write a JavaScript function pizzaPricing that accepts the size of the pizza as a string parameter (small, medium, or large).
Toppings:
Each topping adds an additional cost of $1.50.
The pizzaPricing function should return a function (curried function) that takes an array of selected toppings as a parameter (e.g., ['bacon', 'cheese']).
Quantity:
The curried function should then return another function that takes the quantity of pizzas as a parameter and calculates the total price.
Ensure that the final total price is returned as a number, rounded to two decimal places.

Expected Input
Size: large
Toppings: ['bacon', 'cheese']
Quantity: 1
Expected Output
Total Price: 15.00
Solution:
Formula: (Price of the Size + No. of toppings * 1.5) * Quantity => (12 + 2*1.5)* 1 = 15   

Hints:
Use a JavaScript object to store the base prices for each size.
The final price should include the base price plus the total cost of the toppings, multiplied by the quantity.
Remember to use .toFixed(2) to ensure the result is formatted to two decimal places.
*/

function pizzaPricing(size) {
  return function toppings(top) {
    return function qyantity(qty) {
        const totalPrice = (size + top.length * 1.5) * qty
      return Number(totalPrice.toFixed(2));
    };
  };
}

let size = { small: 8, medium: 10, large: 12 };
let topping = ["bay corn", "tomato", "onion"];
let qty = 2;
console.log(pizzaPricing(size.medium)(topping)(qty));
