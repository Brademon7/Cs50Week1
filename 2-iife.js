const sayHello1 = (function (){
	const msgHello = "Hello!";

	function sayHello2(){
		console.log(msgHello);
	}

	return sayHello2;
})()



console.log('typeof message: ', typeof msgHello);

console.log(sayHello1.toString());
//console.log(sayHello2.toString()); This line does not work as the iife has encapsulated the
//functionality of the sayHello2 function within a closure. 

sayHello1();

