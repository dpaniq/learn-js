'use strict'

/*

DOM


----------[ВЫБОРКА]-----------------------------------------------------------------------------
document.getElementsByName('name') - поиск элемента name="имя аттрибута"
document.getElementById('id-of-element-in-html')
document.body.getElementsByClassName()
document.body.getElementsByTagName()
document.querySelector('.class')
document.querySelectorAll('.class')


----------[ПЕРЕМЕЩЕНИЕ]-----------------------------------------------------------------------------
document.body.children - все дочерние элементы
document.body.childNodes - все дочерние узлы
document.body.firstChild
document.body.firstElementChild
document.body.lastChild
document.body.lastElementChild
document.body.nextElementSibling
document.body.previousElementSibling

----------[ИМЯ УЗЛА]-----------------------------------------------------------------------------
document.body.classList ?
document.body.className // имя класса
document.body.nodeName // BODY
document.body.tagName // BODY
document.body.NodeType // Тип узла (https://developer.mozilla.org/ru/docs/Web/API/Node/nodeType)


----------[СОЗДАНИЕ]-----------------------------------------------------------------------------
document.createElement(tag) – создаёт элемент с заданным тегом,
document.createTextNode(value) – создаёт текстовый узел (редко используется),
elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.

document.body.appendChild
document.body.replaceChild
document.body.removeChild


element.textContent = 'text text text'
elem.hasAttribute(name) – проверяет наличие атрибута
elem.getAttribute(name) – получает значение атрибута
elem.setAttribute(name, value) – устанавливает атрибут

elem.removeAttribute(name) – удаляет атрибут


Если нужно вставить фрагмент HTML, то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:

"beforebegin" – вставляет html прямо перед elem,
"afterbegin" – вставляет html в elem в начало,
"beforeend" – вставляет html в elem в конец,
"afterend" – вставляет html сразу после elem.

Методы classList:

elem.classList.contains("class") – возвращает true/false, в зависимости от того, есть ли у элемента класс class.
elem.classList.add/remove("class") – добавляет/удаляет класс class
elem.classList.toggle("class") – если класса class нет, добавляет его, если есть – удаляет.

----------[ВСТАВКИ]-----------------------------------------------------------------------------
Вот методы для различных вариантов вставки:
[новые]
node.append(...nodes or strings) – добавляет узлы или строки в конец node,
node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
node.before(...nodes or strings) –- вставляет узлы или строки до node,
node.after(...nodes or strings) –- вставляет узлы или строки после node,
node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

[старые]
parentElem.appendChild(node) - Добавляет node в конец дочерних элементов parentElem.
parentElem.insertBefore(node, nextSibling) - Вставляет node перед nextSibling в parentElem.
parentElem.replaceChild(node, oldChild) - Заменяет oldChild на node среди дочерних элементов parentElem.
parentElem.removeChild(node) - Удаляет node из parentElem (предполагается, что он родитель node).

----------[EVENT LISTENER]-----------------------------------------------------------------------------
.addEventListener(event, function(){})
https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener

----------[EVENTS]-----------------------------------------------------------------------------
Events:
https://learn.javascript.ru/introduction-browser-events



Для оживления веб-страниц широко используется язык JavaScript. В этом языке существуют специальные события, которые происходят в определенный момент времени при выполнении каких-либо действий. Обработчиков событий достаточно много, также были введены новые HTML5 обработчики событий.

Полный список обработчиков событий приводится ниже. Выполнение кода обработчика запускается, когда выполнено условие:

onabort – прерывание воспроизведения;
onafterprint – закончена печать;
onautocomplete – выполнено автозаполнение формы;
onautocompleteerror – ошибка при автозаполнении формы;
onbeforeprint – подготовка к печати;
onbeforeunload - документ выгружен;
onblur – потеря фокуса;
oncancel – отмена действия;
oncanplay - можно начать воспроизведение указанного медиа-файла;
oncanplaythrough - можно начать воспроизведение указанного медиа-файла без необходимости остановки для буферизации;
onchange – изменение значения; 
onclick – клик на элементе;
onclose – закрытие чего-либо;
oncontextmenu – открытие контекстного меню;
oncopy – выполнено копирование;
oncuechange - изменение метки в элементе track;
oncut – выполнено вырезание контента;
ondblclick – двойной клик на элементе;
ondrag - перетаскивание элемента;
ondragend - перетаскивание элемента завершено;
ondragenter - элемент перетаскивается в допустимую целевую зону;
ondragexit – выход из режима перетаскивания;
ondragleave - элемент оставляет допустимую цель;
ondragover - элемент перетаскивается по допустимой целевой точке;
ondragstart – начало операции перетаскивания;
ondrop – перетаскиваемый элемент отпущен;
ondurationchange - изменение длины носителя;
onemptied – файл неожиданно стал недоступен;
onended – воспроизведение завершено;
onerror – произошла ошибка;
onfocus – установка фокуса на элементе;
onhashchange - изменение привязки части адреса;
oninput – начало ввода данных;
oninvalid – элемент поврежден;
onkeydown – нажата клавиша;
onkeypress - нажата клавиша и затем отпущена;
onkeyup – отпущена клавиша;
onload – элемент загружен;
onloadeddata – загружены данные файла;
onloadedmetadata – загружены метаданные файла;
onloadstart – начало загрузки элемента;
onmessage - появление сообщения;
onmousedown – нажата клавиша мыши;
onmouseenter – указатель мыши наведен на элемент;
onmouseleave – указатель мыши покинул элемент;
onmousemove - указатель мыши перемешен над элементом;
onmouseout - указатель мыши перемещается из элемента;
onmouseover - указатель мыши перемещается по элементу;
onmouseup - кнопка мыши отпускается над элементом;
onmousewheel (onwheel) – использовано колесико мыши;
onoffline – браузер запущен в оффлайн режиме;
ononline – браузер запущен в онлайн режиме;
onpagehide - пользователь переходит от страницы;
onpageshow - пользователь переходит на страницу;
onpaste – выполнена вставка контента;
onpause – приостановка воспроизведения;
onplay – начало воспроизведения;
onplaying – воспроизведения файла;
onpopstate - изменение истории окна;
onprogress – получение метаданных файла;
onratechange - изменение скорости воспроизведения;
onreset – выполнен сброс данных;
onresize – изменение размера элемента;
onscroll – прокрутка содержимого элемента;
onsearch – выполнен поиск;
onseeked - поиск закончился;
onseeking – поиск активен;
onselect – выбор некоторого текста или значения;
onshow – показ элемента;
onsort – выполнение сортировки;
onstalled - браузер не может получить мультимедийные данные по любой причине;
onstorage – обновлено веб-хранилище;
onsubmit – подтверждение отправки данных формы;
onsuspend – остановка извлечения метаданных;
ontimeupdate – изменение позиции (времени) воспроизведения файла, то есть перемотка файла;
ontoggle - пользователь открывает или закрывает элемент details;
onunload – загрузка выполнена, после чего произошло закрытие документа;
onvolumechange – громкость изменена;
onwaiting – ожидание восстановления воспроизведения.

Обработчики событий следует использовать правильным образом, желательно не писать их напрямую в атрибутах тегов, а устанавливать обработчики событий в подключаемых файлах с JavaScript-кодом. Если используется библиотека jQuery, то название обработчиков необходимо писать без префикса on. Таким образом, были рассмотрены все обработчики событий JavaScript, приведен полный список событий с описанием.

*/