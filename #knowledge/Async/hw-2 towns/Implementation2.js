console.time('time')

let homeworkContainer = document.body.querySelector('#homework-container');
let loadingBlock = homeworkContainer.querySelector('#loading-block');
let filterBlock = homeworkContainer.querySelector('#filter-block');
let filterInput = homeworkContainer.querySelector('#filter-input');
let filterResult = homeworkContainer.querySelector('#filter-result');
let townsPromise;
let cities = [];

function loadTowns() {
	return townsPromise = new Promise((resolve) => {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
		xhr.responseType = 'json';

		xhr.addEventListener('load', () => {

			loadingBlock.innerHTML = '';
			filterBlock.style.display = 'inline-block';

			resolve(xhr.response.sort(function (a, b) {
				if (a.name > b.name) {
					return 1;
				}
				if (a.name < b.name) {
					return -1;
				}
				return 0;
			}));
		});
		xhr.send();
	});
}

/**
 * Функция должна проверять встречается ли подстрока chunk в строке full
 * Проверка должна происходить без учета регистра символов
 *
 * @example
 * isMatching('Moscow', 'moscow') // true
 * isMatching('Moscow', 'mosc') // true
 * isMatching('Moscow', 'cow') // true
 * isMatching('Moscow', 'SCO') // true
 * isMatching('Moscow', 'Moscov') // false
 *
 * @return {boolean}
 */
function isMatching(full, chunk) {
	if (full.toLowerCase().indexOf(chunk.toLowerCase()) !== -1) {
		return true;
	} else {
		return false;
	}
}


loadTowns()
	.then(res => {
		cities = res;
		loadingBlock.style.display = 'none';
		filterBlock.style.display = 'block';
	});

filterInput.addEventListener('keyup', function () {
	filterResult.innerHTML = filterInput.value ?
		cities
			.filter(item => isMatching(item.name, filterInput.value))
			.map(item => `${item.name}`)
			.join('')
		: '';
});

console.timeEnd('time')

