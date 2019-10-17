
// (not work with n = 0) How can i fix that?
function Fac(n) {
    if (n > 1) {
        n *= Fac(n - 1)
    } else {
        n *= 1
    }
    return n
}

function Fac1(n) {
    if (n === 0) {
        return 1
    }
    return n * Fac(n - 1)
}


// wow (not work with n = 0) How can i fix that?
function Fac2(n) {
    return (n > 1) ? n *= Fac(n - 1) : n *= 1
}


console.log(Fac(5))
console.log(Fac(10))
console.log(Fac(20))
console.log(Fac(0))
console.log()
console.log(Fac1(5))
console.log(Fac1(10))
console.log(Fac1(20))
console.log(Fac1(0))
console.log()
console.log(Fac2(5))
console.log(Fac2(10))
console.log(Fac2(20))
console.log(Fac2(0))