let arrayNumber = [0,1,2,3,4,5]
/*
function groupbynum(arr, size) {
    let newArr = []
    let i = 0

    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size))
        i += size
    }
    return newArr
}

console.log(groupbynum(arr, 2))

*/

/*
function groupbynum(arr, size) {
    let newArr = []

    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size))
    }

    return newArr
}

console.log(groupbynum(arr, 2))

 */
function groupbynum(arr, size) {
    let newArr = []
    while(arr.length) {
        newArr.push(arr.splice(0, size));
    }
    return newArr
}

console.log(groupbynum(arrayNumber, 2))

