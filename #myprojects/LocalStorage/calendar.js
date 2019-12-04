// developer : http://shpargalkablog.ru/2013/11/calendar.html


function Calendar(id, year, mnth) {
    let Dlast = new Date(year,mnth+1,0).getDate(),
        D = new Date(year,mnth,Dlast),
        DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
        ctr = '<tr>',
        month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
    if (DNfirst != 0) {
      for(let i = 1; i < DNfirst; i++) ctr += '<td>';
    }else{
      for(let i = 0; i < 6; i++) ctr += '<td>';
    }
    for(let i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        ctr += '<td class="today">' + i;
      }else{
        ctr += '<td>' + i;
      }
      if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
        ctr += '<tr>';
      }
    }
    for(let i = DNlast; i < 7; i++) ctr += '<td>&nbsp;';
    document.querySelector('#'+id+' tbody').innerHTML = ctr;
    document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
    }
    Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
    // переключатель минус месяц
    document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
      Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)-1);
    }
    // переключатель плюс месяц
    document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
      Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)+1);
    }


export {Calendar}