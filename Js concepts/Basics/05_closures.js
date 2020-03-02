// Функция имеет доступ к области видимости выше стоящего скоупа.
// Function has access to scope above standing scope 


// Curring
function sayHelloTo(name) {
    const message = `Hello ` + name
    return function () {
        return function () {
            return message
        }
    }
}

//_[IIFE] Immediately Invoked Function Expression
const helloToElena = sayHelloTo('Elena')()()

console.log(helloToElena)