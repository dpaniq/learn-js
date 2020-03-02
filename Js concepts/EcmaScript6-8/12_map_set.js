// Словарь map

const map = new Map(
    [ ['a', 1 ] ]
)

// console.log(map)                                         // Map { 'a' => 1 }
// console.log(map.get('a'))                                // 1
map.set('b', 2).set(NaN, 'Number').set(42, 'demo')          
// console.log(map.get(NaN))                                // Number
// console.log(map.has(42))                                 // true
// map.delete('b')                                          
// console.log(map.size)                                    // 3

console.log(map.keys())                                     // [Map Iterator] { 'a', 'b', NaN, 42 }
console.log(map.entries())                                  
// [Map Entries] {
//     [ 'a', 1 ],
//     [ 'b', 2 ],
//     [ NaN, 'Number' ],
//     [ 42, 'demo' ]
//   }
console.log(map.values())                                   // [Map Iterator] { 1, 2, 'Number', 'demo' }

// -------------------------------------------------------------------------------------
// Кортеж 

const set = new Set([1,2,3,4,5,5,5,5,5,5,5,6])
console.log(set)                                // Set { 1, 2, 3, 4, 5, 6 }
console.log(set.size)                           // 6
console.log(set.add(21))                        // Set { 1, 2, 3, 4, 5, 6, 21 }

console.log(set.keys())                         // [Set Iterator] { 1, 2, 3, 4, 5, 6, 21 }
console.log(set.values())                       // [Set Iterator] { 1, 2, 3, 4, 5, 6, 21 }
console.log(set.entries())
// [Set Entries] {
//     [ 1, 1 ],
//     [ 2, 2 ],
//     [ 3, 3 ],
//     [ 4, 4 ],
//     [ 5, 5 ],
//     [ 6, 6 ],
//     [ 21, 21 ]
//   }

console.log(set.clear())