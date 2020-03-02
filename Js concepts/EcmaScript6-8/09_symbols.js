const symbol = Symbol('demo')
const other = Symbol('demo')

console.log(symbol)
console.log(other)

console.log(symbol == other) // false
console.log(symbol === other) // false

const obj = {
    name: 'Elena',
    demo: 'DEMO',
    [symbol]: 'meta'
}

console.log(obj) // { name: 'Elena', [Symbol(demo)]: 'meta' }
console.log(obj[symbol]) // meta
console.log(obj[other]) // undefined

// loop `for in` does not see [symbols] 

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol