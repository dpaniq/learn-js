// Reflect
    // Встроенный объект, который предоставляет методы для перехватывания JavaScript операций.
    // Эти методы аналогичны методам proxy handler`ов.
    // Reflect - это не функциональный, а простой объект, он не является сконструированным.

// Описание
    // В отличие от большинства глобальных объектов, Reflect - это не конструктор.
    // Вы не можете использовать его с оператором new или вызывать Reflect, как функцию.
    // Все свойства и методы объекта Reflect являются статическими (так же, как и у объекта Math).

// Методы
// Объект Reflect обеспечивает работу статических функций, называющиеся так же, как методы proxy handler`а. Некоторые из этих методов - те же, что и соответствующие им методы класса Object.

// Reflect.apply()
// Вызывает целевую функцию с аргументами, переданными в параметре args. Смотрите также Function.prototype.apply().
// Reflect.construct()
//  Оператор new как функция. Аналогично new target(...args). Также предоставляет возможность определить другой прототип.
// Reflect.defineProperty()
// Похож на Object.defineProperty(). Возвращает Boolean.
// Reflect.deleteProperty()
// Оператор delete как функция. Аналогично delete target[name].
// Reflect.enumerate()
// Похож на цикл for...in. Возвращает итератор с собственными перечисляемыми и наследуемыми свойствами целевого объекта.
// Reflect.get()
// Функция, которая возвращает значение свойств.
// Reflect.getOwnPropertyDescriptor()
// Аналогично Object.getOwnPropertyDescriptor(). Возвращает дескриптор указанного свойства если присутствует в объекте, иначе undefined.
// Reflect.getPrototypeOf()
// Аналогично Object.getPrototypeOf().
// Reflect.has()
// Оператор in как функция. Возвращает значение Boolean в зависимости от факта наличия собственного или наследованного свойства.
// Reflect.isExtensible()
// Аналогично Object.isExtensible().
// Reflect.ownKeys()
// Возвращает массив строк с именами собственных (не наследованных) свойств.
// Reflect.preventExtensions()
// Аналогично Object.preventExtensions(). Возвращает Boolean.
// Reflect.set()
// Функция, присваивающая значения свойствам. Возвращает Boolean значение true при успешном выполнении.
// Reflect.setPrototypeOf()
// Функция, присваивающая прототип целевому объекту.



// Reflects (meta-data objects)

class Student {
    constructor(name) {
        this.name = name
    }

    greet(){
        console.log(`Hi!, My name is ${this.name}`)
    }
}

class ProtoStudent {
    university = 'oxford'
}

// const student = Reflect.construct(Student, ['IGOR'], ProtoStudent)
const student = Reflect.construct(Student, ['IGOR'])

console.log(student)                    // Student { name: 'IGOR' }
console.log(student.__proto__, student.__proto__ === ProtoStudent.prototype) // ProtoStudent { name: 'IGOR' } | ProtoStudent {} true

Reflect.apply(student.greet, {name: 'Tester'}, []) // Hi!, My name is Tester
console.log(Reflect.ownKeys(student))              // [ 'name' ]

student.age = 25                
console.log(student) // Student { name: 'IGOR', age: 25 }

Reflect.preventExtensions(student) // Forbid changes
student.ears = 2
console.log(student) // Student { name: 'IGOR', age: 25 }

console.log(Reflect.isExtensible(student))   // False - расшеряемый ли объект?