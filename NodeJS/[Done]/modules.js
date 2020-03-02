// I - File
// ../<category>/<filename>.js
// ../<category>/<filename2>.js - module

// file2.js
// <code>...</code> 
// 1) module.exports = <object> / <func> / <variables(const/let)>
// 2) exports.<name> = <object> / <func> / <variables(const/let)>

// file.js
// const some = require('../<dirOfpackage>[inside index.js] or ../<file>.js')
// const {some} = require('../<dirOfpackage>[inside index.js] or ../<file>.js') - only
// const some = require('../<dirOfpackage>[inside index.js] or ../<file>.js').some - only

// -----------------------------------------------------------------------------

// II - Node or 3th party module
// ../<category>/</filename>.js

// <filename>.js
// const variable = require('<node module>')

// or

// require('<node module>')