/* ДЗ 5 - DOM Events */

/**
 * Функция должна добавлять обработчик fn события eventName к элементу target
 *
 * @param {string} eventName - имя события, на которое нужно добавить обработчик
 * @param {Element} target - элемент, на который нужно добавить обработчик
 * @param {function} fn - обработчик
 */
function addListener(eventName, target, fn) {
	target.addEventListener(eventName, fn)
}

/**
 * Функция должна удалять обработчик fn события eventName у элемента target
 *
 * @param {string} eventName - имя события, для которого нужно удалить обработчик
 * @param {Element} target - элемент, у которого нужно удалить обработчик
 * @param {function} fn - обработчик
 */
function removeListener(eventName, target, fn) {
	target.removeEventListener(eventName, fn)
}

/**
 * Функция должна добавлять к target обработчик события eventName, который должен отменять действие по умолчанию
 *
 * @param {string} eventName - имя события, для которого нужно удалить обработчик
 * @param {Element} target - элемент, на который нужно добавить обработчик
 */
function skipDefault(eventName, target) {
	target.addEventListener(eventName, (event) => event.preventDefault())
}

/**
 * Функция должна эмулировать событие click для элемента target
 *
 * @param {Element} target - элемент, на который нужно добавить обработчик
 */

function emulateClick(target) {
	let click = new CustomEvent('click')
	target.dispatchEvent(click)


	/*
	EventTarget.dispatchEvent(event)
	Отправляет событие в общую систему событий. 
	Это событие подчиняется тем же правилам поведения "Захвата" и "Всплывания" 
	как и непосредственно инициированные события.
	*/
}

/**
 * Функция должна добавить такой обработчик кликов к элементу target
 * который реагирует (вызывает fn) только на клики по элементам BUTTON внутри target
 *
 * @param {Element} target - элемент, на который нужно добавить обработчик
 * @param {function} fn - функция, которую нужно вызвать при клике на элемент BUTTON внутри target
 */
function delegate(target, fn) {
	target.addEventListener('click', (event) => {
		if (event.target.tagName == 'BUTTON')
			fn()
	})

}

/**
 * *** Со звездочкой ***
 * Функция должна добавить такой обработчик кликов к элементу target
 * который сработает только один раз и удалится
 * Постарайтесь не создавать глобальных переменных
 *
 * @param {Element} target - элемент, на который нужно добавить обработчик
 * @param {function} fn - обработчик
 */
function once(target, fn) {
	target.addEventListener('click', fn, { once: true })
}



// /**
//  * *** Со звездочкой *** 
//  */

// /**
//  * Создать страницу с кнопкой
//  * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
//  * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
//  * Запрощено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
//  */




btn = document.createElement('button')
btn.textContent = 'Add div'
btn.style.width = '100px'
btn.style.height = '40px'


document.body.appendChild(btn)

container = document.createElement('div')
container.id = 'cont'
container.style.display = 'flex'
container.style.backgroundColor = 'grey'
container.style.height = '800px'
container.style.padding = '50px'

document.body.appendChild(container)

function color() {
	let x = 255 - Math.round(Math.random() * 100)
	let y = 255 - Math.round(Math.random() * 100)
	let z = 255 - Math.round(Math.random() * 100)
	return `rgb(${x},${y},${z})`
}

// function position() {
// 	let xy = Math.round(Math.random() * 10) * Math.round(Math.random() * 17)
// 	return xy
// }


function createDiv() {
	x = document.createElement('div')
	x.style.position = 'relative'
	x.style.width = 50 + 'px'
	x.style.height = 50 + 'px'
	x.style.backgroundColor = color()
	// x.style.top = position() + 'px'
	// x.style.left = position() + 'px'
	container.appendChild(x)
	return x
}

btn.addEventListener('click', (event) => {
	createDiv()
})

container.addEventListener('mousedown', (event) => {
	let divblock = event.target

	if (divblock.id != 'cont') {

		// подготовить к перемещению
		// 2. разместить на том же месте, но в абсолютных координатах
		divblock.style.position = 'absolute'
		moveAt(event)

		// переместим в body, чтобы мяч был точно не внутри position:relative
		container.appendChild(divblock)

		divblock.style.zIndex = 1000; // показывать мяч над другими элементами

		// передвинуть мяч под координаты курсора
		// и сдвинуть на половину ширины/высоты для центрирования
		function moveAt(e) {
			divblock.style.left = e.pageX - divblock.offsetWidth  / 2 + 'px';
			divblock.style.top  = e.pageY - divblock.offsetHeight / 2 + 'px';
		}

		// 3. перемещать по экрану
		document.onmousemove = function (e) {
			moveAt(e)
		}

		// 4. отследить окончание переноса
		divblock.onmouseup = function () {
			divblock.style.position = 'none'
			document.onmousemove = null
			console.log(document)
			divblock.onmouseup = null
		}
	}
})





// /**
//  * homeworkContainer - это контейнер для всех ваших домашних заданий
//  * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
//  *
//  * @example
//  * homeworkContainer.appendChild(...);
//  */
// let homeworkContainer = document.querySelector('#homework-container');

// /**
//  * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
//  * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
//  * Функция НЕ должна добавлять элемент на страницу
//  *
//  * @return {Element}
//  */
// function createDiv() {
// }

// /**
//  * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
//  *
//  * @param {Element} target
//  */
// function addListeners(target) {
// }

// let addDivButton = homeworkContainer.querySelector('#addDiv');

// addDivButton.addEventListener('click', function () {
// 	// создать новый div
// 	let div = createDiv();

// 	// добавить на страницу
// 	homeworkContainer.appendChild(div);
// 	// назначить обработчики событий мыши для реализации d&d
// 	addListeners(div);
// 	// можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
// 	// или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
// });

