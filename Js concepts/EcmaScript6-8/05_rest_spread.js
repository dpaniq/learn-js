// Rest

// function avarage() {
//     return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length
// }

// console.log(avarage(10,20,30,40,50))

// -------------------------------------------------------------------------------------

// function avarage(a, b, ...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length
// }

// console.log(avarage(10,20,30,40,50))


// -------------------------------------------------------------------------------------
// Spread

// const array = [1,2,3,4,5,6]
// // console.log(Math.max(...array))

// // -------------------------------------------------------------------------------------
// const fib = [1, array]
// console.log(fib)


// -------------------------------------------------------------------------------------
// Destructuring

// const array = [1, undefined ,'IN HERE',4,5,5,66,7]

// const [a, b = 42, , ...c] = array
// console.log(a, b, c) // 1 42 [ 4, 5, 5, 66, 7 ]


// Obejct desctructing

const address = {
    country: 'Russia',
    city: 'Moscow',
    // street: 'Lenina',
    concat: function() {
        return `${this.country}, ${this.city}, ${this.street}`
    }
}

// const {city, country, street = 'Tverksaya', concat: addressConcat} = address
// console.log(city, country, street)
// console.log(addressConcat.call(address))

// const {city, ...rest} = address
// console.log(city) // Moscow
// console.log(rest) // { country: 'Russia', concat: [Function: concat] }

// const newAddress = {...address, street: 'Tverskaya', code: 123 }
// console.log(newAddress)