function makeFunctionArray()
{
	const arr = [];
	//Creating a closure by pushing onto "arr" the result of a function that returns a  function
	//that logs the value of x which we are passing in as i.
	//This is not used much though can be seen when using libraries in order to not polute
	//the global object.
	for(var i = 0; i < 5; i++){

		arr.push((function (x) { 
			return function(){console.log(x)};
		})(i));
	}
	
//	for(let printLoop = 0; printLoop < arr.length; printLoop++){
//ii		arr[printLoop]();
//	}

//	console.log('value of i: ', i);

	return arr;
}

const functionArr = makeFunctionArray();

functionArr[0]();
