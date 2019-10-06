

console.log(typeof ([ ] + false), [ ] + false);   // Строка        | false
console.log(typeof (false - null), false - null); // Объект Number | 0
console.log(typeof (null + true), null + true);   // Объект Number | 1
console.log(typeof ([ ] + null), [ ] + null);     // Строка        | Ноль

console.log(typeof ('string' - null), 'string' - null); // Объект Number | Not a Number (NaN)

let y = 1; 
let x = y = 2; // Присвоет значение равное y, который присваивается 2-ке
console.log(x); 

console.log(typeof ([ ] + 1 + 2), [ ] + 1 + 2); // Превратит в строку

console.log("1"[0]); // Выводит 1 символ строки

console.log(2 && 1);            // 1
console.log(1 && null);         // null
console.log(null && 0);         // null
console.log(0 && undefined);    // 0

console.log(2 && 1 && null && 0 && undefined); // null 

let a = 1;
let b = 0;

console.log((a && b)); // 0
console.log(!(a && b)); // 0
console.log(!!(a && b)); // 0
console.log(1 && 4); // Большее число
console.log(3 || 4); // 3 ???

console.log(null || 2 && 3 || 4 ); //3 ???

let ab = [1, 2, 3], ba = [1, 2, 3];
console.log(ab === ba); // false

console.log(typeof (+"Infinity"), +"Infinity", 123 + +'infinity'); // number, infinity, NaN

console.log("ёжик" > "яблоко"); // true

console.log(0 || "" || 2 || undefined || true || falsе) // 2