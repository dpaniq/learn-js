console.time('time')
/**
 * *** ДЗ 6.2 - Создать страницу с текстовым полем для фильтрации городов ***
 *
 * [COMPLETED]
 * Страница должна предварительно загрузить список городов из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * и отсортировать в алфавитном порядке.
 *
 * [COMPLETED]
 * При вводе в текстовое поле, под ним должен появляться список тех городов,
 * в названии которых, хотя бы частично, есть введенное значение.
 * Регистр символов учитываться не должен, то есть "Moscow" и "moscow" - одинаковые названия.
 *
 * [COMPLETED]
 * Во время загрузки городов, на странице должна быть надпись "Загрузка..."
 * После окончания загрузки городов, надпись исчезает и появляется текстовое поле.
 * [COMPLETED]
 * Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 *
 * *** Часть со звездочкой ***
 * Если загрузка городов не удалась (например, отключился интернет или сервер вернул ошибку),
 * то необходимо показать надпись "Не удалось загрузить города" и кнопку "Повторить".
 * При клике на кнопку, процесс загруки повторяется заново
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');
let loadingBlock = homeworkContainer.querySelector('#loading-block');
let filterBlock = homeworkContainer.querySelector('#filter-block');
let filterInput = homeworkContainer.querySelector('#filter-input');
let filterResult = homeworkContainer.querySelector('#filter-result');
/**
 * Функция должна загружать список городов из https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * И возвращать Promise, которой должен разрешиться массивом загруженных городов
 *
 * @return {Promise<Array<{name: string}>>}
 */


function loadTowns() {

	const url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json'

	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url)
		xhr.send()
		xhr.addEventListener('load', () => {
			if (xhr.status = 200) {

				loadingBlock.style.display = 'none'
				filterBlock.style.display = 'block'

				let citiesArray = JSON.parse(xhr.response)

				citiesArray.sort((a, b) => {
					if (a.name > b.name) { return 1 }
					if (a.name < b.name) { return -1 }
					return 0 // a должно быть равным b
				})
				resolve(citiesArray)

			} else {
				loadingBlock.textContent = 'Не удалось загрузить города!'
				reject('Null')
			}
		})
	})
		.then(value => {
			filterInput.addEventListener('input', (event) => {

				if (event.target.value === '') {
					filterResult.textContent = ''

				} else {
					filterResult.textContent = ''
					let seek = event.target.value
					let reg = new RegExp('([\\w]*' + seek + '[\\w]*)', 'gi');

					let txtCites = value.map((element) => element.name).join(' ')
					let arrayMatch = txtCites.match(reg)

					arrayMatch.forEach(element => {
						let popOut = document.createElement('div')
						popOut.className = 'filter-pop-input'
						popOut.textContent = element
						filterResult.appendChild(popOut)
					})
				}
			})
		})
}

console.timeEnd('time')