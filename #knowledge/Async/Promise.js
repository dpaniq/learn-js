/** 
* *** Promise state ***
* @state [pending] (waiting / ожидание)
*        [fulfilled] (resolved / выполнено успешно)
*        [rejected] (выполнено неудачно)
*
* @method [then] - return new promise
* @method [catch] - обработчик ошибок
* @resonse [value] - принимает значение value и после вызова передает в then
*
* @chaining [then(value-response,value-reject)] - цепочка из then objects promise
*
* @then [function/value], [обработчик-ошибок] - then принимает две функции 
*/

 
let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
xhr.send()
xhr.addEventListener('load', () => {

    console.log(xhr.response)
})