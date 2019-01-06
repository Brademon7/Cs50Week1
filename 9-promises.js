const url = ""

fetch(url)
	.then(function(res){
		// handle error?
		return res.json()
	})
	.then(function(json){
		return({
			importantData : json.importantData;
		}
	})
	.catch(function(err){
		//handle error
	})



