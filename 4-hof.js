function map(arr, fn){
	//First is the array to call the map on
	//second is the map function
	const newArr = [];
	
	for(let i = 0; i < arr.length; i++){
		let val = arr[i];
		newArr.push(fn(val));
	}

	return newArr;
}

function addOne(num) { return num + 1};

const x = [0,1,2,3];

console.log(map(x, addOne));
