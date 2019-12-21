/* Based on : http://shpargalkablog.ru/2013/11/calendar.html
    Thank you shpargalkablog!
*/

import {
    PanelFastTask,
    PanelLongTask
} from '../js/panel/paneltask.js'

import { tasks } from '../js/object/tasks.js'

function Calendar(id, year, mnth) {
    let Dlast = new Date(year, mnth + 1, 0).getDate(),
        D = new Date(year, mnth, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        tr = '<tr>',
        month = ["January", "February", "Mart", "April", "May", "June", "Jule", "August", "September", "Oktober", "Nomber", "December"];

    // PEREPISATJ PO CHELOVECHESKI
    // console.log(id, year, mnth)
    // console.log('Dlast', Dlast)
    // console.log('D', D)
    // console.log('DNlast', DNlast)
    // console.log('DNfirst', DNfirst)


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

        // tr += '<div class="daysymbols"></div>'  // tasksfortheday contains all tasks for today

        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            tr += '<tr>';
        }
    }
    for (let i = DNlast; i < 7; i++) tr += '<td></td>';
    document.querySelector('#' + id + ' tbody').innerHTML = tr;


    document.querySelector('#' + id + ' thead th:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead th:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead th:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }

    const alltd = document.querySelectorAll('#' + id + ' tbody td');

    // counter task in day corner 
    for (let x = 0; x < alltd.length; x++) {
        const tdtime = new Date(alltd[x].dataset.dateYear, alltd[x].dataset.dateMonth, alltd[x].dataset.dateDay)
        let counter = 0
        let t1 = 0,
            t2 = 0,
            t3 = 0,
            t4 = 0
        for (let xx = 0; xx < tasks.length; xx++) {

            const tasktime = new Date(tasks[xx].task_date.start)
            

            if (tdtime.getFullYear() === tasktime.getFullYear() &&
                tdtime.getMonth() === tasktime.getMonth() &&
                tdtime.getDate() === tasktime.getDate()) {
                    switch (tasks[xx].task_type) {
                        case 'ordinary':
                            t1 += 1
                            break;

                        case 'urgently':
                            t2 += 1
                            break;

                        case 'important':
                            t3 += 1
                            break;

                        case 'performed':
                            t4 += 1
                            break;

                        default:
                            break;
                    }
            }
        }

        if (t1 || t2 || t3 || t4) {
            let placetasktype = document.createElement('div')
            placetasktype.className = 'daysymbols'
            
            if (t1) {
                let t1div = document.createElement('div')
                t1div.innerHTML = t1 + '⊙'
                placetasktype.appendChild(t1div)
                
            }
            if (t2) {
                let t2div = document.createElement('div')
                t2div.innerHTML = t2 + '⊕'
                placetasktype.appendChild(t2div)
            }
            if (t3) {
                let t3div = document.createElement('div')
                t3div.innerHTML = t3 + '⊖'
                placetasktype.appendChild(t3div)
            }
            if (t4) {
                let t4div = document.createElement('div')
                t4div.innerHTML = t4 + '⊗'
                placetasktype.appendChild(t4div)
            }
        alltd[x].appendChild(placetasktype) 
        }

       
    }
}



Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
// Switch month before
document.querySelector('#calendar thead tr:nth-child(1) th:nth-child(1)').onclick = function () {
    Calendar("calendar", document.querySelector('#calendar thead th:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead th:nth-child(2)').dataset.month) - 1);
}
// Switch month after
document.querySelector('#calendar thead tr:nth-child(1) th:nth-child(3)').onclick = function () {
    Calendar("calendar", document.querySelector('#calendar thead th:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead th:nth-child(2)').dataset.month) + 1);
}

export { Calendar }