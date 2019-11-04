/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */

function isAllTrue(array, fn) {

	// try {
	if (!Array.isArray(array) || array.length == 0) {
		throw new Error('empty array')
	}
	if (typeof (fn) != 'function') {
		throw new Error('fn is not a function')
	}

	// } catch (e) {
	// 	return e.message
	// }

	afterFilterFunc = array.filter(fn)
	if (afterFilterFunc.length == array.length) {
		return true
	}
	return false

}

/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {

	if (!Array.isArray(array) || array.length == 0) {
		throw new Error('empty array')
	}
	if (typeof (fn) != 'function') {
		throw new Error('fn is not a function')
	}

	afterFilterFunc = array.filter(fn)
	if (afterFilterFunc.length > 0) {
		return true
	}
	return false
}

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение

 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
	let func = arguments[0]
	let otherArgs = [...arguments].slice(1, arguments.length)

	if (typeof (func) != 'function') {
		throw new Error('fn is not a function')
	}
		// console.log(otherArgs)
		let errorMassive = []
		for (let i = 0; i < otherArgs.length; i++) {
			try {
				func(otherArgs[i])
			} catch {
				errorMassive.push(otherArgs[i])
			}
		}
		// console.log('Засранцы Not Even', errorMassive)
		return errorMassive
}

/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)

 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator(number = 0) {
	if (!isFinite(number)) {
		throw new Error('number is not a number')
	}
	object = {
		sum: function() {
			let argsWithNumber = [number].concat(...arguments)
			return argsWithNumber.reduce((a,b) => a + b)
		},

		dif: function() {
			let argsWithNumber = [number].concat(...arguments)
			return argsWithNumber.reduce((a,b) => a - b)
		},

		div: function() {
			let argsWithNumber = [number].concat(...arguments)
			nullArg = argsWithNumber.filter(x => x == 0)
			if (nullArg.length > 0) {
				throw new Error('division by 0')
			}
			return argsWithNumber.reduce((a,b) => a / b)
		},

		mul: function() {
			let argsWithNumber = [number].concat(...arguments)
			return argsWithNumber.reduce((a,b) => a * b)
		}
	}

	return object
}
