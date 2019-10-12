'use strict'

/*
======================================= Data Type | Тип данных

1. Что такое тип данных?
    ?

2. Тип данных Number содержит?
    2.1. Целочисленные значения (1,2,3...), числа с плавающей точкой (1.5, 3.7, 3,14...)
    2.2. Бесконечности Infinity, -Infinity
    2.3. NaN - означает вычислительную ошибку

3. Тип данных String содержит?
    3.1. Значение заключенное в кавычки ('', "", ``) может быть пустым ---> '' или ---> 'the simple[123] string!'
    3.2. `Обратные кавычки позволяют встраивать переменные ${str}`;

4. Тип данных Булевый или (логический) тип?
    4.1. true == 1 == правда
    4.2. false == 0 == ложь

5. Тип данных null и undefined
    5.1. null - Формирует отдельный тип, который содержит только значение null
    5.2. undefined - Оно означает, что «значение переменной не было присвоено».

6. Тип данных Object и Symbol?
    6.1. - Object для более сложных структур данных.
        6.1.1. Массив ([]) 
        6.1.2. Ассоциативный массив или Объект
        6.2.3. Дата (new Date())
    6.2. - Symbol для уникальных идентификаторов.

7. Как определить тип данных? 
    Оператор typeof (typeof x или typeof(x)), позволяет нам увидеть, какой тип данных сохранён в переменной.
    
*/

console.log("" + 1 + 0,     typeof("" + 1 + 0))        // = 10 (string)
console.log("" - 1 + 0,     typeof("" - 1 + 0))        //  = -1 (number)
console.log(true + false,   typeof(true + false))      //  = 1 (number)
console.log(6 / "3",        typeof(6 / "3"))           //  = 2 (number)
console.log("2" * "3",      typeof("2" * "3"))         //  = 6 (nubmer)
console.log(4 + 5 + "px",   typeof(4 + 5 + "px"))      //  = 9px (string) 
console.log("$" + 4 + 5,    typeof("$" + 4 + 5))       //  = $45 (string)
console.log("4" - 2,        typeof("4" - 2))           //  = 2 (nubmer)
console.log("4px" - 2,      typeof("4px" - 2))         //  = NaN (number)
console.log(7 / 0,          typeof(7 / 0))             //  = Infinity (number)
console.log("  -9  " + 5,   typeof("  -9  " + 5))      //  = '   -9   5' (string)
console.log("  -9  " - 5,   typeof("  -9  " - 5))      //  = -14 (number)
console.log(null + 1,       typeof(null + 1))          //  = 1 (number)
console.log(undefined + 1,  typeof(undefined + 1))     //  = undefined (number)
console.log(" \t \n" - 2,   typeof(" \t \n" - 2))      //  = -2 (number)

