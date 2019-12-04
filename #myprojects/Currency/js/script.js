
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd')

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest()

    request.open('GET', 'js/current.json')
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send()


    request.addEventListener('load', function() {
        return new Promise((resolve, reject) => {
            let data = JSON.parse(request.response)
            resolve(data)
        })
        .then(dataValue => {
                inputUsd.value = inputRub.value / dataValue.usd
        })
        .catch(value => {
            inputUsd.value = value
        })
    })

})