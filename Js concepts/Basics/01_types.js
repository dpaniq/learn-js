//               [ null, undefined, bolean, number, string,        object,       symbol,     Not A Number ]
// const types = [ null, undefined,  true,    56,   'asdad',   {obj:'object'}, Symbol('JS'),      NaN]


// types.forEach(element => {
//     console.log(typeof element)
// });


// -------------------------------------------------------------------------------------

// '', 0, null, undefined, NaN, false ---> boolean ---> false
// [], {}, function(){}               ---> boolean ---> true

// -------------------------------------------------------------------------------------

// '' - 1 + 0     ---> -1 number
// '3' * '8'      ---> 24 number
// '42' - 40      ---> 2 number
// '42px' - 2     ---> NaN
// null + 2       ---> 0 + 2 ---> 2 number
// undefined + 42 ---> NaN + 42 ---> NaN

// -------------------------------------------------------------------------------------

// ==  vs ===
// ==  сравнивает значение с приведением типов
// === сравниает только по значению

// -------------------------------------------------------------------------------------

console.log(`false == '' `, false == '') // true
console.log(`false == [] `, false == []) // true (unlogical)  
console.log(`false == {} `, false == {}) // false

console.log(`'' == 0     `, '' == 0)     // true
console.log(`'' == []    `, '' == [])    // true  (unlogical)
console.log(`'' == {}    `, '' == {})    // false

console.log(`0  == []    `, 0  == [])    // true  (unlogical)
console.log(`0  == {}    `, 0  == {})    // false
console.log(`0  == null  `, 0  == null)  // false (unlogical)

// -------------------------------------------------------------------------------------

