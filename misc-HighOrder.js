const arr = [0, 1, 2, 3];

function addOne(num){
	return num + 1;
}

function greaterThanOne(num){
	return num > 1;
}

function addition(x, y){
	return x + y;
}

logSpace();
console.log("Values held in normal array");
console.log(arr.toString());
logSpace();
console.log("Map function: ");
console.log(addOne.toString());
console.log("Result from map");
console.log(arr.map(addOne));
logSpace();
console.log("Filter function: ");
console.log(greaterThanOne.toString());
console.log("Result from filter");
console.log(arr.filter(greaterThanOne));
logSpace();
console.log("Reduce function: ");
console.log(addition.toString());
console.log("Result from reduce");
console.log(arr.reduce(addition));
logSpace();


function logSpace(){
	console.log("");
}

