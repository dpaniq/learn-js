// OLD

// const person = {
//     age: 26,
//     name: 'Irina',
//     'country-live': 'Russia',
//     toString: function() {
//         return Object
//             .keys(this)
//             .filter(key => key !== 'toString')
//             .map(key => this[key])
//             .join(' ')
//     }
// }

// console.log(person.toString())


// -------------------------------------------------------------------------------------
// NEW

const cityField = 'city'
const job = 'Frontend'

const person = {
        age: 26,
        name: 'Irina',
        job, // job: job,
        [cityField] : 'Saint-Peterburg',
        'country-live': 'Russia',

        print: () => 'Doesnt work with context',
        
        toString () {
            return Object
                .keys(this)
                .filter(key => key !== 'toString')
                .map(key => this[key])
                .join(' ')
        }
    }
    
    console.log(person.toString())


// -------------------------------------------------------------------------------------

// Methods
const first = {a: 1}
const seconds = {b: 2}

console.log(Object.assign(first, seconds)) // { a: 1, b: 2 }

const obj = Object.assign({}, first, { c : 3, d : 4})
console.log(obj) // { a: 1, b: 2, c: 3, d: 4 }

console.log(Object.entries(obj)) // 2d massive Ассоциативные массивы [KEY, VALUE] // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]
console.log(Object.keys(obj)) // [ 'a', 'b', 'c', 'd' ]
console.log(Object.values(obj)) // [ 1, 2, 3, 4 ]