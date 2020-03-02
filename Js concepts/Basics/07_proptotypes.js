// __proto__
// Object.getPrototypeOf()

// function Cat(name, color){
//     this.name = name
//     this.color = color
// }

// // For exstensions
// Cat.prototype.voice = function() {
//     console.log(`Cat`, this.name + ` says meow`)
// }

// const cat = new Cat('Kot', 'white')
// console.log(cat.__proto__, cat.__proto__ === Cat.prototype)
// cat.voice()

// -------------------------------------------------------------------------------------

// function Person() {}
// Person.prototype.legs = 2
// Person.prototype.skin = 'white'

// const person = new Person()
// person.name = 'Vladilen'

// console.log('skin' in person) // true
// console.log(person.legs) // 2
// console.log(person.name) // Vladilen

// console.log(person.hasOwnProperty('name')) // true
// console.log(person.hasOwnProperty('skin')) // false

// -------------------------------------------------------------------------------------

// Object.create()
const proto = {year: 2019}
const myYear = Object.create(proto)

console.log(myYear.year)
console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto)