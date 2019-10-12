'use strict'

/* 
1. Что такое оператор?
   Математический знак - + * / ** %-остаток от числа //-сколько поделенно нацело

2. Что такое операнд?
    Операнд – то, к чему применяется оператор.

3. Что такое унарный оператор?
    Это оператор, который применяется к одному операнду ---> -7 или +10 (один знак, одно значение).

4. Что такое бинарный оператор?
    Бинарным называется оператор, который применяется к двум операндам ---> 7 - 10 (один оператор между двумя операндами).

5. Как можно применить унарный +?
    5.1. Унарный + можно использовать для преобразования строки в число, например ---> +'779' ---> 779 (number).
    5.2. Для преобразования boolean в число ---> +false ---> 0 или +true ---> 1 (number)

6. Что такое increment и decrement?
    6.1. Инкремент ++i - увеличивает i на единицу, равнозначно выражению i = i + 1
    6.2. Декремент --i - уменьшает i на единицу - равнозначно выражению i = i - 1
    

7. Какая разница между pre/post-инкремент/декремент)
    preincrement = когда два унарных плюса/минуса стоят впереди переменной. Значение переменной меняется сразу.
    postincrement = значение изменится после прохода всего цикла

8. Сокращенная математичка с присваиванием
    n *= 5 ---> n = n * 5
    n /= 2 ---> n = n / 2
    n **= 5 ---> n = n**5

9. Операторы сравнения
    9.1. 1 == true - сравнивает операнды после приведения к общему типу ---> 1 == 1 ---> true
    9.2. 1 === true - сравнивает операнды по их типу, затем по значению. ---> number === boolean ---> false


. Какие существуют побитовые операторы?

AND                         (и)                                 ( & )
OR                          (или)                               ( | )
XOR                         (побитовое исключающее или)         ( ^ )
NOT                         (не)                                ( ~ )
LEFT SHIFT                  (левый сдвиг)                       ( << )
RIGHT SHIFT                 (правый сдвиг)                      ( >> )
ZERO-FILL RIGHT SHIFT       (правый сдвиг с заполнением нулями) ( >>> )

Примеры?
*/

console.log(1 === 1)