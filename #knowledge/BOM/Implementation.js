/* ДЗ 7.1 - BOM */

/**
 * Функция должна создавать окно с указанным именем и размерами
 *
 * @param {number} name - имя окна
 * @param {number} width - ширина окна
 * @param {number} height - высота окна
 * @return {Window}
 */
function createWindow(name, width, height) {
	return window.open("", name, `width = ${width}, height = ${height}`);
}

/**
 * Функция должна закрывать указанное окно
 *
 * @param {Window} window - окно, размер которого надо изменить
 */
function closeWindow(window) {
	window.close()
}

/**
 * Функция должна создавать cookie с указанными именем и значением
 *
 * @param name - имя
 * @param value - значение
 */
function createCookie(name, value) {
	document.cookie = `${name}=${value}`
}

/**
 * Функция должна удалять cookie с указанным именем
 *
 * @param name - имя
 */
function deleteCookie(name) {
	document.cookie = `${name}=; max-age  = -1`
}

///////////////////////////////////////////////////////////////////////////////

/**
 * 
 * ДЗ 7.2 - Создать редактор cookie с возможностью фильтрации
 *
 * [COMPLETE]
 * На странице должна быть таблица со списком имеющихся cookie:
 * - имя
 * - значение
 * - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)
 *
 * [COMPLETE]
 * На странице должна быть форма для добавления новой cookie:
 * - имя
 * - значение
 * - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)
 *
 * Если добавляется cookie с именем уже существующией cookie, то ее значение в браузере и таблице должно быть обновлено
 *
 * На странице должно быть текстовое поле для фильтрации cookie
 * В таблице должны быть только те cookie, в имени или значении которых есть введенное значение
 * Если в поле фильтра пусто, то должны выводиться все доступные cookie
 * Если дабавляемая cookie не соответсвуте фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 * Если добавляется cookie, с именем уже существующией cookie и ее новое значение не соответствует фильтру,
 * то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена
 *
 * Для более подробной информации можно изучить код тестов
 *
 * Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');
let filterNameInput = homeworkContainer.querySelector('#filter-name-input');
let addNameInput = homeworkContainer.querySelector('#add-name-input');
let addValueInput = homeworkContainer.querySelector('#add-value-input');
let addButton = homeworkContainer.querySelector('#add-button');
let listTable = homeworkContainer.querySelector('#list-table tbody');


// ===============================================================
filterNameInput.addEventListener('keyup', (event) => {
	createTRfromCookies(filterNameInput.value)
});

addButton.addEventListener('click', (event) => {
	document.cookie = `${addNameInput.value}=${addValueInput.value}`

	
		
		createTRfromCookies()
	
	
})



listTable.addEventListener('click', (event) => {
	if (event.target.classList == 'delete-cookie') {
		// Ищем имя cookie
		let nameOfCurrentCookie = event.target.parentNode.firstChild.textContent
		// Удаляем cookie
		document.cookie = `${nameOfCurrentCookie}=; max-age = -1`
		event.currentTarget.removeChild(event.target.parentNode) 
	} 
})


function createTRfromCookies(filter = '') {
	
	listTable.textContent = ''
	let cookies = document.cookie.split('; ')
	cookies.map(elem => {
		if (elem.match(filter)){
			let [name, value] = elem.split('=')

			tr = document.createElement('tr')

			td_name = document.createElement('td')
			td_name.textContent = name

			td_value = document.createElement('td')
			td_value.textContent = value

			dlt_btn = document.createElement('button')
			dlt_btn.className = `delete-cookie`
			dlt_btn.textContent = 'Удалить'

			tr.appendChild(td_name)
			tr.appendChild(td_value)
			tr.appendChild(dlt_btn)

			listTable.appendChild(tr)
		}

		
	})


}