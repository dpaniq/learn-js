function validate(string, regexp) {
    return string.split('').reduce((acc, character) => {
        if (character.match(regexp)) {
            return acc + character
        }
        return acc
    }, '')
}

export const onlyTextInput = (event) => {
    const input = event.target
    const inputReduce = validate(input.value, /[a-zA-Zа-яА-Я]/)

    input.value = inputReduce === '' ? '' : inputReduce
}

export const onlyIntegerInput = (event) => {
    const input = event.target
    const inputReduce = validate(input.value, /[0-9]/)

    input.value = inputReduce === '' ? '' : inputReduce
}

export const checkEmptyInput = (obj) => {
    return Object.values(obj).every(item => item !== '')
}
