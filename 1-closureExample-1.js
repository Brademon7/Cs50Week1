function makeHelloFunction(){
	const msgHello = "Hello!";

	function sayHello(){
		console.log(msgHello);
	}

	return sayHello;
}

const sayHello = makeHelloFunction();

console.log('typeof message: ', typeof msgHello);

console.log(sayHello.toString());

sayHello();

