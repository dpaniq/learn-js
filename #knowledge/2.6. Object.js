'use strict'

/*
================================ Object | Объект

Что такое объект и как он создается?
	Объект может быть создан с помощью фигурных скобок {…} с необязательным списком свойств. Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»).
	let obj = {}

	Пример:
		let obj = {
			`name`: `Alex`,
			`sname`: `Rex`,
			``: `weird`
			}
		name - ключ
		Alex - значение

Как вызвать свойство объекта? 
	obj.name ---> Alex
	obj.[`sname`] ---> Rex
	obj[``] ---> weird

Что такое вложенность объекта?
Объект в объекте:
	let obj = {
		name: `Alex`,
		sname: `Rex`,
		wife: {
			name: 'May',
			surname: 'Parker'
		}
	}

Вызов объекта в объекте:
	obj.wife.name ---> May


Замена значения
	obj.wife.name = 'Jessie'

Добавление свойства объекта:
	obj.pet = 'dog' ---> obj {name = ..., sname: ..., pet = 'dog' }


Проверка существования свойства:
	Object.noSuchProperty === undefined или "key" in object
	Object.assign(dest, [src1, src2, src3...]) - клорирование объекта 
--------------------------------------------------------------------------------



Что такое прототип (prototypes?	


`В JS можно обойтись без классов, поскольку можно наследоваться от другого объекта.


let Human {
	type: `human`,
	head: 1,
	legs: 2
}

Как создать прототип объкта?
1. 
let Megahuman = Object.create(Human) // создать прототип

2.


Megahuman.type ---> `human`
Megahuman.face ---> `undefined` - такого свойства в объекте нет.


Последяя ветка прототипов:
console.log(Object.prototype)

new Object() - объявление объекта
new - конструктор

Создание конструктора:

function Obj(name) {
	this.name = name
}

Создание прототипов.
Obj.prototype.say = function(what){
	console.log(this.name + what)
}


let variable = new Obj('Grey Warm')
variable.say(' hello') // Grey Warm hello

Удаление свойства у объекта:

delete Human.head // Повлечет удаление свойства head в объекте Human


this - Откуда вызывается функция? Находим объект. И вызываем this.smth == nameobj.smth





Наследование:

---
var parent = { name: 'Alex' };

var child = Object.create(parent);

child.name // 'Alex'
---

x instanceof y       //наследует ли что-то x от y?


.apply(thisArg, [ params ]) - тот объект который мы хотим вызвать и псевдомассив с параметрами
.call(thisArg, Arg1, Arg2, Arg3...)






Функциональное наследование.