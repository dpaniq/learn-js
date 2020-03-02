// __filename __dirname

// PATH
const path = require('path')

console.log('Название файла:', path.basename(__filename))
console.log('Название директории:', path.dirname(__filename))
console.log('Расширения файла:', path.extname(__filename))
console.log('Parse:', path.parse(__filename))
console.log('Join:', path.join(__dirname, 'server', 'index.html'))

// console.log('Delimiter: ', __dirname.split(path.delimiter))

// console.log('', path.format(pathObject))
// console.log('', path.isAbsolute(path))
// console.log('', path.normalize(path))

// console.log('', path.posix)
// console.log('', path.relative(from, to))
// console.log('', path.resolve([...paths]))
// console.log('', path.sep)
// console.log('', path.toNamespacedPath(path))
// console.log('', path.win32)