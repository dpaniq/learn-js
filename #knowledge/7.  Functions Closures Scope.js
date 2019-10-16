'use strict'
/*
// -------------------------- Part I: Functions --------------------------------
	1. Какой инструмент можно использовать для выполнения инструкций N и более раз? 
		Функция - избавление от дублирования кода

	Какие функции вы знаете?

		Анонимные функции:	---> Anonymous functions
		function() {console.log('unknows function')} ()
	
	----------------------------------------------------------------------------

	Декларированные функции: --> Function Declaration --> 
		функция объявляется отдельной конструкцией «function…» в основном потоке кода.
		function Hey() {console.log( "hey" );}

	----------------------------------------------------------------------------

	Функциональное выражение: ---> Function Expression --> 
		функция, созданная внутри другого выражения или синтаксической конструкции.
		let sayHey = function() {console.log( "hey" )}
	
		(!Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться)

	----------------------------------------------------------------------------

	Стрелочные функции: ---> Arrow Function

		let func = (arg1, arg2, ...argN) => expression

	Пример:
		let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
			let result = a + b;
			return result; // при фигурных скобках нужен return, чтобы вернуть результат
			};

		alert( sum(1, 2) ); // 3

	----------------------------------------------------------------------------

	Что означает возврат функции?
		Возврат функции - это объект, который получился в результате выполнения функции.
		Как только функция встречает return, фунция возвращает полученное значение и прекращает работу.

	Какая область видимости у функции?
		Переменные, объявленные внутри функции, видны только внутри этой функции
		Функция обладает полным доступом к внешним переменным и может изменять их значение

	Чем отличаются параметры от аргументов?
		Параметры - это условные значения, которые принимает функция при ее описании (function name(x,y)) {}
		Аргументы - это реальные значения-объекты с которыми работает телофункции

	C помощью какого ключевого слова можно собрать все переданные аргументы функции?
		arguments - псевдомассив со всеми переданными аргументами
			Прогоняется с помощью for (i=0; i < arguments.lenth, i++) {}

	Что означает this в функции?
		?

	Свойсва функции?
		.length
		.prototype

	Методы:
		.call
		.apply

	---------------------------- Part II: Hoisting -----------------------------

	1. 						2.
	Hoisting:
	let a = 10				// let a = 10
	(function() {			// (function() {
		console.log(a)  	//		let a 			<--- Объявляется
		let a = 11			//		console.log(a)  <--- Без значения выводится
	}) ()					//		a = 11
							//	})()


	1. Выведет undefined
	2. То, в какой последовательности выполнется код						
	Hoisting - это всплытие переменных в самый вверх блока

// --------------------------- Part III: Closures -------------------------=----

	Замыкание
		Возвращаемая функция имеет доступ к свободным переменным которые сущестоваЛИ в главной функции на момент запуска. 


	let getAnswer = (function() {
		let answer = 42
		return function inner () {
			return answer   // <---- имеет доступ к answer, хотя в этот момент такой переменной уже не существует
	}
	}()) - вызываем сразу


	getAnswer() // потому что вернули функцию


	-------------- Part IV: Callback Functions ---------------------------------


Что такое функция callback?
	Функциями-колбэками или просто колбэками называют Аргументы-функции
	(Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно)

Пример:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);


// -------------------- Part V: Main Functions ---------------------------------


1. Sort:

Для чего нужна функция sort?
Что функция принимает в качестве параметров?
В каких случаях требуется эта функция?
	Привидите примеры:

		.sort - выставить элементы в нужном порядке
			let hey = [1,12,5,87,54] // hey.sort ---> [1,12,5,54,67] ( как будто внутри строки )
			function compare (a, b) {return a - b}
			hey.sort(compare) // ---> [1, 5, 12, 54, 87]

--------------------------------------------------------------------------------
2. Find:

Для чего нужна функция sort?
Что функция принимает в качестве параметров?
В каких случаях требуется эта функция?
 Привидите примеры:
--------------------------------------------------------------------------------
3. Filter:

Для чего нужна функция sort?
Что функция принимает в качестве параметров?
В каких случаях требуется эта функция?
 Привидите примеры:
--------------------------------------------------------------------------------
4. Reduce:

Для чего нужна метод reduce?
Что функция принимает в качестве параметров?
В каких случаях требуется эта функция?
	Привидите примеры:

		.reduce -  Сделать что-то со всеми элементами массива
			c = [1,2,3,4,5]
			function adder(a, b) {return a+b};
			c.reduce(adder, начальное значение)






--------------------------------------------------------------------------------
5. Map:

Для чего нужна функция sort?
Что функция принимает в качестве параметров?
В каких случаях требуется эта функция?
 Привидите примеры:

*/
let x = 'asdasdasdasdasjiduhasud hasjdbasjdbhqwbdh qwbdsdasdasdasdasdadsdadasdasdsh bashdbqwhbdhqwbdhsbdsahdbhqwbdhqbwhdbshabdhbqw hdbqwh'