// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

// function outer() {
// 	console.log('hello world');
// }

function outer() {
	let privateVar = 'secret';
	function inner() {
		console.log(`hello there secret is : ${privateVar} `);
	}
	return inner;
	inner();
}

// privateVar is outside the scope, but you can access it from the inner function if it is returned
// console.log(privateVar);

// outer is returning a function, so you add another set of brackets to invoke it
outer()();

// or you can put it in a variable/constant, then invoke it
const value = outer();
console.log(value);
value();
