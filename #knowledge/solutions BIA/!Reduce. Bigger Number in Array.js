someArray = [
    [1, 55, 44, 1223],
    [-123, 12312, 12, 555],
    [54, 123, 123123, 1000],
    [19,788, 9999**2, 200]
    
]
/*
function whatIsBiggerNumber(arrays) {
    result = []
    for (let i = 0; i < arrays.length; i++){

        result.push(arrays[i].reduce(function(a, b){
            return Math.max(a, b)
        }))
        
    }
    console.log(result)
}

whatIsBiggerNumber(someArray)
*/
// My Fantastic Solution

function whatIsBiggerNumber2(arrays) {
    return arrays.map(function(element){
        return element.reduce(function(previous, current){
            return Math.max(previous, current)
        })
    })
    
}

console.log(whatIsBiggerNumber2(someArray))




/*
Incredible Solution

function whatIsBiggerNumber3(arrays) {
    return arr.map(Function.apply.bind(Math.max, null))
}

Apply: ?
Bind: ?

*/