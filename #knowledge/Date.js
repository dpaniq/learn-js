var a='This is a test string';
var b='test';
function testStr(a, b) {
    return (a.indexOf(b));
}
w=testStr(a, b);

document.write(w);
//console.log(my_function(a));
//document.write("Hello World");   

//var person = new Object();
//var person = {}

//document.write(testCase(a));
/*
function Person(name, age, year) {
  this.name = name;
  this.age = age;
  this.year = year;
}


var person = {}                                  //Объявляем объект person
person.sayAge = function(n) {                    //Объявляем метод sayAge для объекта person
    console.log("Person is " + n + " years old");  //Тело метода sayAge - вывод текста
};
*/

//var employee1 = new Person("Ivan","25","2017");
//var employee2 = new Person("Olga","21","2016");
//var employee3 = new Person("Oleg","32","2010");

//Person.name = "Ivan"
//Person['name'] = "Ivan"


//result = a.concat(b , c); - объединяет строки
//var myArray = myString.split(',');('разделитель') 

//toLowerCase() - преобразовывает все буквы в строке к нижнему регистру
//.toUpperCase()
//myString = String.fromCharCode(65, 66, 67); 


/*
substring(indexA[, indexB]) - возвращает часть строки начиная с позиции indexA, но не включая indexB
slice( indexA[, indexB] ) - возвращает часть строки начиная с позиции indexA, но не включая indexB 
substr(indexA[, length]) - возвращает часть строки начиная с позиции indexA, в количестве length
replace(regexp, newSubString|function)  - возвращает новую строку после замен, указанных в regexp, или функцию, которая ее возвращает. Регулярные выражения - RegExp, мы с вами рассмотрим подробно в третьем модуле курса.


indexOf(searchValue[, fromIndex]) - ищет подстроку searchValue начиная с позиции fromIndex
lastIndexOf(searchValue[, fromIndex]) - ищет последнюю подстроку  searchValue начиная с позиции fromIndex 
search(regExp) - проверяет - есть ли совпадение с аргументом, результат true или false
match(regExp) - выдает массив всех совпадение с аргументом


toString() - возвращает элементарную строку вместо объекта String 
valueOf() - возвращает элементарную строку вместо объекта String, эквивалентно toString() 

myArray.push("Сидоров");  
x = myArray.unshift("Сергеев", "Дмитриев") 

myArray.length = 4;
delete myArray[2];

myString = myArray.join();
myArray.reverse()
myArray.sort
myArray.concat("Смит")
myArray.slice(1,3)
.split("")


var x = new Date() //В объект попадут текущие дата и время
var x = new Date(миллисекунды) //Количество миллисекунд отсчитывая с 1 января 1970г
var x = new Date(строкаДаты)
var x = new Date(год, месяц, день[, часы, минуты, секунды, миллисекунды])
var myDate = new Date(1998, 6, 14, 11, 20, 00)

var myDate = new Date();               // Объявляем переменную типа Date
myDate.setFullYear(2017, 4, 22);       // Присваиваем ей значение даты - 22 мая 2017
myDate.setDate(myDate.getDate() + 10);

getDay() - возвращает день недели от 0 до 6, 0 - воскресенье, 1 - понедельник и т.д.
getTimeZoneOffset() - возвращает смещение часового пояса  относительно UTC, в минутах с противоположным знаком.
getYear() - возвращает значение года минус 1900, к использованию не очень рекомендуется.
getFullYear() -  возвращает значение года. 
getMonth() - возвращает месяц, от 0 до 11
getDate() - возвращает число месяца от 1 до 31
getHours() - возвращает час, от 0 до 23
getMinutes() - возвращает количество минут, от 0 до 59
getSeconds() - возвращает количество секунд, от 0 до 59
getMilliseconds() - возвращает количество миллисекунд, от 0 до 999
getTime() - возвращает количество миллисекунд, прошедших с полуночи 1 января 1970г GMT.

Date.parse() - преобразовывает строку с датой,
toLocaleString() - Возвращает объект типа String содержащий дату
toLocaleTimeString() - преобразовывает данные о времени в строку,
toLocaleDateString() - выполняет преобразование, 





*/