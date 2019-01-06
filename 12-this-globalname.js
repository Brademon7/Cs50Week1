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


const greet = person.greet.bind({name: "this is a bound object 1"});

person.greet.call({name: "this is a bound object 2; call"});
person.greet.apply({name: "this is a bound object 3; apply"});
	
const newPerson = {
	name: "newPerson",
	greet : () => { console.log("hi, " + this.name)}
}

newPerson.greet();

greet();
