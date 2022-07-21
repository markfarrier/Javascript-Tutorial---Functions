// Hoisting
// function and var declarations are hoisted
// safer to access only after initialized
display();
moreComplex();
console.log(display);
console.log(moreComplex);
// console.log(firstName);
// console.log(lastName);
// console.log(random);

// can't access const before it is initialized
const firstName = 'john';
// can't access let before it is initialized
let lastName = 'jordan';
// can access var random before it is initialized, but you can't access the value
var random = 'random';

// javascript essentially moves the function declaration onto the top of the page.  It gets initialized before it is invoked.
function display() {
	console.log('hello world');
}

function moreComplex() {
	// cannot access first or last name before they are initialized
	// console.log(`${firstName}, ${lastName}, ${random}`);
	console.log(` ${random}`);
}
