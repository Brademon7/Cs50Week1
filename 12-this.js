const person = {
	name : "Bradie",
	greet: function(){ console.log("Hello, " + this.name)},
}

//this is bound to person
person.greet();

const friend = {
	name: "James",
}

friend.greet = person.greet

//returns 'Hello, james' as at this point the this is refereing to the friend object which had a key 'name'
friend.greet();

const greet = person.greet;
//returns hello, undefined, as at this point this is refereing to the global object, name is not a key on the global object.
greet();
