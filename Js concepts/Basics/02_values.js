// let a = 42
// let b = a
// b++

// console.log('a: ', a, 'b: ', b) ---> a = 42 | b = 43

// -------------------------------------------------------------------------------------

// let a = [1,2,3]
// let b = a // link! b.concat(a) - copy of array
// b.push(4)

// console.log('a: ', a, 'b: ', b) // a == b == [1,2,3,4]

// -------------------------------------------------------------------------------------

let a = [1,2,3]
a.push(4)
let c = [1,2,3,4]

console.log('a == c: ', a == c) // false