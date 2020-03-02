// const title = 'Header'

// const template = `
//     <h1>
//         ${title.length > 10 ? 'Header<10' : 'Header!!!'}
//     </h1>
// `

// console.log(template)

// -------------------------------------------------------------------------------------

// methods

const str = 'Hello'

console.log(str.startsWith('He')) // .endWith('')
console.log(str.startsWith('e'))

console.log(str.includes('llo')) // true

console.log(str.repeat(3)) 

console.log(str.trim()) // .trimEnd() | .trimStart() - delete spaces

console.log(str.padStart(10, '*'))
console.log(str.padEnd(10, '*'))