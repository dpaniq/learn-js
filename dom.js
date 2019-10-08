let div1 = document.body.childNodes[1];
let div2 = document.body.children[0];
let div3 = document.body.firstElementChild;
console.log(div1, div2, div3); // Первый тег после body



let ul1 = document.body.lastElementChild.previousElementSibling;
let ul2 = document.body.children[1];
console.log(ul1);
console.log(ul2);

let li1 = document.body.lastElementChild.previousElementSibling.lastElementChild;
let li2 = document.body.lastElementChild.previousElementSibling.firstElementChild.nextElementSibling;
let li3 = document.body.lastElementChild.previousElementSibling.children[1];

console.log(li1);
console.log(li2);
console.log(li3);

 