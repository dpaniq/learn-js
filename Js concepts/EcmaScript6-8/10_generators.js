const array = [1,2,3,4,5]
const str = 'Hello'

// console.log(array[Symbol.iterator]) // function
// console.log(str[Symbol.iterator]) // function

// const iter = array[Symbol.iterator]()
// console.log(iter)           // Object [Array Iterator] {}
// console.log(iter.next())    // { value: 1, done: false }
// console.log(iter.next())    // { value: 2, done: false }
// console.log(iter.next())    // { value: 3, done: false }
// console.log(iter.next())    // { value: 4, done: false }
// console.log(iter.next())    // { value: 5, done: false }
// console.log(iter.next())    // { value: undefined, done: true }

// for (let item of array) { // 1,2,3,4,5
//     console.log(item)
// }

// -------------------------------------------------------------------------------------
// Your iterator

// const county = {
//     values: ['ru', 'kz', 'ua', 'by'],

//     [Symbol.iterator]() {
//         let i = 0
//         return {
//             next: () => {
//                 const value = this.values[i]
//                 i++
//                 return {
//                     done: i > this.values.length,
//                     value 
//                 }
//             }
//         }
//     }
// }

// for (let i of county) {
//     console.log(i)
// }


// -------------------------------------------------------------------------------------
// Generator

function *gen(num = 4) {
    for (let i = 0; i < num; i++) {
        try {
            yield i
        } catch (e) {
            console.log('Error inside `try-catch`', e)
        }
    }
}

const iter = gen()
console.log(iter.next())                // { value: 0, done: false } 
console.log(iter.throw('MY ERROR'))     // Error inside `try-catch` MY ERROR
console.log(iter.next())                // { value: 1, done: false }
console.log(iter.next())                // { value: 1, done: false }
console.log(iter.next())                // { value: 1, done: false }
                                        // { value: undefined, done: true } ?