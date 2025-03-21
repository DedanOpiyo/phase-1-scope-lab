// Write your solution in this file!

// customerName: Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

// upperCaseCustomerName(): Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// setBestCustomer(): Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'. 
// (Poor Bob.) Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.
function setBestCustomer() {
    bestCustomer = 'not bob'; // declares the global variable bestCustomer. Because (var, let, or const) keywords aren't used to declare bestCustomer, it is implicitly created in the global scope (outside the function).
}

// overwriteBestCustomer(): See the consequences of declaring a variable in global scope, 
// by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // our functions are for demonstration purposes, and don't need to return anything.
}

// Declare a constant (using the const keyword) in global scope called leastFavoriteCustomer; be sure to assign it some initial value. 
// Finally, write a function called changeLeastFavoriteCustomer() that attempts to change that constant - notice what JavaScript does when you try to change the constant.
const leastFavoriteCustomer = 'some constant value';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'change made to some constant value'; // this will throw an error because constants cannot be reassigned.
}

changeLeastFavoriteCustomer();
// => Uncaught TypeError: Assignment to constant variable. at changeLeastFavoriteCustomer...