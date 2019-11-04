/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {

	for (let i = 0; i < array.length; i++) {
		fn(array[i], i, array)
	}
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
	massiveAfterFunc = []
	for (let i = 0; i < array.length; i++) {
		massiveAfterFunc.push(fn(array[i], i, array))
	}
	return massiveAfterFunc
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {

	let accumulator = initial || array[0]
	let i = initial ? 0 : 1

	for (; i < array.length; i++) {
		accumulator = fn(accumulator, array[i], i, array)
	}

	return accumulator
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
	delete obj[prop]
	return obj
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
	return prop in obj
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
	return Object.keys(obj)

}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
	newMassive = []
	Object.keys(obj).forEach(item => newMassive.push(item.toUpperCase()))
	return newMassive


}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
	let massive = []
	// console.log(array, from, to, massive)

// undefind   undefind
	if (arguments.length == 1) {
		return array
	}

// from >= 0 | undefind
	if (from >= 0 && typeof to == 'undefined') {
		if (from > array.length) {
			return []
		} else {
			while (from < array.length) {
				massive.push(array[from])
				++from
			}
		}
		return massive
	}

// from < 0 | undefind

	if (from < 0 && typeof to == 'undefined') {
		if (from <= -array.length) {
			return array
		} else {
			from = array.length + from
			while (from < array.length) {
				massive.push(array[from])
				++from
			}
		}
		return massive
	}	

// from = 0  |  to = 0
	if (from == 0 && to == 0) {
		return []
	}

// from >= 0  |  to > 0
	if (from >= 0 && to > 0) {
		if (from > array.length) {
			return []
		} else {
			if (to > array.length) to = array.length

			while (from < to) {
				massive.push(array[from])
				++from
			}
		}
		return massive
	}

// from > 0  |  to < 0
	if (from >= 0 && to < 0) {
		if (from > array.length) {
			return []
		} else {
			to = array.length - -to
			while (from < to) {
				massive.push(array[from])
				++from
			}
		}
		return massive
	}

// from < 0  |  to > 0
	if (from < 0 && to > 0) {
		if (-from < to) {
			return []
		} else { 
			from = -from
			while (from < to) {
				massive.push(array[from])
				++from
			}
		}
		return massive
	}

// from < 0  |  to < 0
	if (from < 0 && to < 0) {
		if (-from > array.length && -to < array.length) {
			from = 0
			to = -to - 1
			while (from < to) {
				massive.push(array[from])
				++from
			}
		}
		return massive
	}
	
}
/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {

// 	target – это объект, для которого нужно сделать прокси, может быть чем угодно, включая функции.
// handler – конфигурация прокси: объект с «ловушками» («traps»):
//  методами, которые перехватывают разные операции, например, ловушка get – для чтения свойства из target,
//   ловушка set – для записи свойства в target и так далее.

	prox =  new Proxy(obj, { // (*)
		set(target, prop, val) { // для перехвата записи свойства
			target[prop] = val * val
	}


	}) // пустой handler
	console.log(prox, typeof prox)
	return prox
}
