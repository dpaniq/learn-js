function Polindrom(str) {
    center = Math.floor(str.length / 2)
    revStr = str.split('').reverse().join('')
    return str.substring(0, center) == revStr.substring(0, center)
}

console.log(Polindrom('some strirts emos'))
