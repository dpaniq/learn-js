'use strict'

/*

1. Какие логические операторы вы знаете?
    1.1. 
        И - «&&» находит первое ложное значение (или возвращает true)

        console.log( true && true );   // true
        console.log( false && true );  // false
        console.log( true && false );  // false
        console.log( false && false ); // false
    

    1.2.
        ИЛИ «||» находит первое истинное значение (или возвращает false)
    
        alert( true || true );   // true
        alert( false || true );  // true
        alert( true || false );  // true
        alert( false || false ); // false

    1.3. 
    
2.
    2.1. У какого логического оператора приоритет больше?
        Наибольшая приоритетность у ЛО «!», затем «&&» и в конце концов у ИЛИ «||»

3. Решите пример:
    console.log(true && 0 || !false)       // true
    console.log(!false && 0 && true)       // 0
    console.log(1 || 0 && true)            // 1
*/  


console.log(true && 0 || !false)      
console.log(!false && 0 && true)       
console.log(1 || 0 && true)     