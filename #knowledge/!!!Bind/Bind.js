// Задание 6 *:

// Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
// Функция должна привязать переданные аргументы к функции (F) и вернуть получившуюся функцию

/*
Bind:
func.bind(context) == bind(func, context)
*/

// Описание функции которая передана в качестве аргумента
function fn(...valuesArr) {
    return [...arguments].join('');
}

function bindFunction(fn) {
    let args = [...arguments].slice(1, length.arguments).join('')
    return fn.bind(null, args)

}


let valuesArr = ['1', '2', '3']; // REAL

let result = bindFunction(fn);
console.log(typeof (result), ' === function')


let result2 = bindFunction(fn, ...valuesArr);

console.log(result2(), valuesArr.join(''))