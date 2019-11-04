// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch

// I   - try...catch
// II  - try...finally
// III - try...catch...finally


// I. Вынесение try catch
function div(a, b) {

    if (b === 0) {
        throw new Error('Not allowed divide of null')
    }
    if (b === undefined) {
        throw new Error('Must pass B')
    }

    return a / b
}

try {
    console.log(div(14, 0))
} catch (e) {
    console.error(e.message)
}

// I. Try..catch внутри функции
function div(a, b) {
    try {
        if (b === 0) {
            throw new Error('Not allowed divide of null')
        }
        if (b === undefined) {
            throw new Error('Must pass B')
        }
    } catch (e) {
        b = 1
    }
    return a / b
}

console.log(div(14, 0))

// 3 Вариант

