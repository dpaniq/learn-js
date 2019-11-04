
// Basic Solution

// function findLongestWord(str) {
//    var split_words = str.split(' ');
//    var word = split_words[0]; 

//     console.log(word, split_words);
  
//     for (var i = 1; i < split_words.length; i++){
        
//       if (word.length < split_words[i].length){
//         console.log( word + ' = is longer than = ' + split_words[i]);
//         word = split_words[i]
//       }
//     }
//   console.log('The longest word is = ' + word, word.length)
// }


// sentence = 'What is a dream reaction by now'
// findLongestWord(sentence)

// ============================================================================

// Intermediate Solution: Reduce
/*Аргументы функции callback(previousValue, currentItem, index, arr):

	previousValue – последний результат вызова функции == Initial value
	currentItem – текущий элемент массива
	index – номер текущего элемента.
	arr – обрабатываемый массив.


function findLongestWord(str) {
	// x - previousValue, y - currentItem
	return str.split(' ').reduce(function(x, y) {
		return Math.max(x, y.length)
		// return Math.min(x, y.length) for shorter
	}, 0); // Initial value
	// }, 1000); for shorter
}

sentence = 'What is a dream reaction by now'
console.log(findLongestWord(sentence))

*/
// ============================================================================

// Advanced solution: recursion

function findLongestWord(str) {
	str = str.split(' ')

	 // Если в массиве одно слово - вывести
	if (str.length == 1) {
		return str[0].length
	}


	if (str[0].length >= str[1].length) {
		str.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
		return findLongestWord(str.join(' '));
	}
	if (str[0].length <= str[1].length) {
		return findLongestWord(str.slice(1, str.length).join(' '));
	}

	return str.length;
} 

sentence = 'What is a dream reaction by now'
console.log(findLongestWord(sentence))