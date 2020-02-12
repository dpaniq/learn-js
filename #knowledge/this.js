// this - context - область видимости переменных и методов

const obj = {
	name: 'Fedor',
	surname: 'Emela'
}

function calls (param) {
	console.log(`${this.name}  ${this.surname} and ${param}`)
}

calls.call(obj, 'param')


function applys (param, param2) {
	console.log(param)
	console.log(`${this.name}  ${this.surname} and ${param}, ${param2}`)
}

applys.apply(obj, [1,2,3])


//Use .bind() javascript

var object2 = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

//creates a bound function that has same body and parameters 
var bound = greeting.bind(object2); 


console.dir(bound); ///returns a function

console.log("Output using .bind() below ");

console.log(bound("Newtown","KOLKATA","WB")); //call the bound function