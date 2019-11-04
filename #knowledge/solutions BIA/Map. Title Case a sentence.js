let string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

function titleCase(str) {
    let converToArray = str.split(' ')
    // var new_array = arr.map(function callback(currentValue, index, array) { 
    //     // Возвращает элемент для new_array 
    // }[, thisArg])

    /*
    callback
        Функция, создающая элемент в новом массиве, принимает три аргумента:
    currentValue
        Текущий обрабатываемый элемент массива.
    index
        Индекс текущего обрабатываемого элемента в массиве.
    array
        Массив, по которому осуществляется проход.
    thisArg
        Необязательный параметр. Значение, используемое в качестве this при вызове функции callback.
    */
    result = converToArray.map(function(element) {
        return element.replace(element.charAt(0),
                               element.charAt(0).toUpperCase())
    })

    return result.join(' ')
}

console.log(titleCase(string))

