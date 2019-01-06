function makeFunctionArray()
{
	const arr = [];

	for(var i = 0; i < 5; i++){
		arr.push(function () { 
			console.log(i);
		});
	}
	
//	for(let printLoop = 0; printLoop < arr.length; printLoop++){
//ii		arr[printLoop]();
//	}

	console.log('value of i: ', i);

	return arr;
}

const functionArr = makeFunctionArray();

functionArr[0]();
