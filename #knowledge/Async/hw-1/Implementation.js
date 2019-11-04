/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {
	let promise = new Promise(function(resolve, reject) {
		setTimeout(resolve, seconds * 1000)
	  })
	return promise
}




/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
	
	const url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json'

	return new Promise((resolve) => {
		const xhr = new XMLHttpRequest();
		
		xhr.open( 'GET', url )
		xhr.send()
		xhr.addEventListener( 'load', () => {
		
			let citiesArray = JSON.parse(xhr.response)

			citiesArray = citiesArray.sort( (a, b) => {
				if (a.name > b.name) { return 1 }
				if (a.name < b.name) { return -1 }				
				return 0 // a должно быть равным b
			  })

			resolve ( citiesArray )
		})
	})
}
