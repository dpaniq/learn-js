// Based on : http://shpargalkablog.ru/2013/11/calendar.html


function Calendar(id, year, mnth) {
    let Dlast = new Date(year, mnth + 1, 0).getDate(),
        D = new Date(year, mnth, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        tr = '<tr>',
        month = ["January", "February", "Mart", "April", "May", "June", "Jule", "August", "September", "Oktober", "Nomber", "December"];

    console.log(id, year, mnth)
    console.log('Dlast', Dlast)
    console.log('D', D)
    console.log('DNlast', DNlast)
    console.log('DNfirst', DNfirst)

    if (DNfirst != 0) {
        for (let i = 1; i < DNfirst; i++) {
            tr += '<td>'
        }
    } else {
        for (let i = 0; i < 6; i++) tr += '<td>';
    }
    for (let i = 1; i <= Dlast; i++) {

        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            tr += `<td class="today" data-date-year="${year}" data-date-month="${mnth}" data-date-day="${i}"> ${i}`
        } else {
            tr += `<td data-date-year="${year}" data-date-month="${mnth}" data-date-day="${i}"> ${i}`
        }

        tr += '<div class"tasksoftheday hide"></div>'  // tasksfortheday contains all tasks for today

        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            tr += '<tr>';
        }
    }
    for (let i = DNlast; i < 7; i++) tr += '<td>&nbsp;';
    document.querySelector('#' + id + ' tbody').innerHTML = tr;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
}


Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
    Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
}
// переключатель плюс месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
    Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
}

// выбираем нужный td
// document.querySelector('#calendar').onclick = function (event) {
//     console.log(event.target, 'попался:)')
// }

export { Calendar }