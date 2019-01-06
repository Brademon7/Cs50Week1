const sayHello = (function (){
	const msgHello = "Hello!";

	function sayHello(){
		console.log(msgHello);
	}

	return sayHello;
})()



console.log('typeof message: ', typeof msgHello);

console.log(sayHello.toString());

sayHello();

//Adding an iife to add a closure to limit access of a variable
//

//Creates a counter which is a function which returns an object with a inc and get function.
const counter = function() {
	let count = 0

	return {
		inc: function() {count = count + 1},
		get: function() {console.log(count) },
	}
	
}();//By immediatly invoking this function it returns the object with the count variable being
//limited locally to the scope of that object.

counter.get();
counter.inc();
counter.get();

//Count variable is not accessible on the global object.
