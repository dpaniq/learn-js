let ex1 = [1, 2, 9, 4, 6, 5, 7, 8, 3]
let ex2 = [99, 88, 77, 66, 55, 44, 33, 22, 11]
let ex3 = [350, -10, 0, 10, -350]

// BASIC
/*
function insertBeetween(arr, number) {
    // First: Sort array
    let sortedArr = arr.sort(function(a, b) {
        return a - b
    })
    // Second: Find index between less and greater
    for (let i = 0; i < arr.length; i++) {
        if (sortedArr[i] >= number) {
            return `[${arr[i]}] has ${i} index in ${sortedArr}`
        } 
    }
    return sortedArr.length
}
*/
// Basic2
/*
function insertBeetween(arr, number) {
    // First: Sort array
    let sortedArr = arr.sort(function(a, b) {
        return a - b
    })
    // Second: Find index between less and greater
    let i = 0
    while (number > sortedArr[i]) {
        i++
    }
    return i
}
 */

// Intermediate
/* 
function insertBeetween(arr, number) {
    // First: Sort array
    let newarr = arr.concat([number])
    newarr.sort((a, b) => { return a - b })
    // Second: Find index between less and greater
    return [newarr.indexOf(number), newarr];
}
*/

// Advanced ???

function insertBeetween(arr, number) {
    // 
    let index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum) => number <= currNum)
    
    return index === -1 ? arr.length : index
}
/**/

console.log(insertBeetween(ex1, 11))
console.log(insertBeetween(ex1, 4))
console.log(insertBeetween(ex1, 3))

console.log(insertBeetween(ex2, 56))
console.log(insertBeetween(ex2, 2))
console.log(insertBeetween(ex2, 12))

console.log(insertBeetween(ex3, 3))
console.log(insertBeetween(ex3, -1))
console.log(insertBeetween(ex3, 777))