let menu = document.body.getElementsByClassName('menu');
let menuItem = document.body.getElementsByClassName('menu-item');

menu[0].insertBefore(menuItem[1], menuItem[3]);

let newMenuItem = document.createElement('li');
newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятный элемент';
menu[0].appendChild(newMenuItem);

// -------------------------------------------------

document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

// -------------------------------------------------

let title = document.getElementById('title');
console.log(title);
title.textContent = 'Мы продаем только подлинную технику Apple';

// -------------------------------------------------
let findBlock = document.body.getElementsByClassName('column');
console.log(findBlock[1].children);

let adv = document.body.getElementsByClassName('adv');
findBlock[1].removeChild(adv[0]);


// -------------------------------------------------
let pt = document.getElementById('prompt');
pt.textContent = prompt('Какое у вас отношение к Apple?', 'Apple лучшие!');
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------

let qsa = document.querySelector('body');
console.log(qsa);
qsa.style.borderWidth = 'medium';
// qsa.style.borderStyle = 'solid';
qsa.style.BorderRightStyle = 'solid';
qsa.style.borderRightColor = 'red';
qsa.style.borderRightWidth = '100px';