// class for make traps on objs


const validator = {
    get(target, prop){
        return prop in target ? target[prop] : `Field with name ${prop} in objects doesnt exist`
    },

    set(target, prop, value){
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log('More than 2 characters. Right now is ' + value.length)
        }
    }
}

const form = {
    login: 'tester',
    password: '123'
}

const formProxy = new Proxy(form, validator)
console.log(formProxy) // { login: 'tester', password: '123' }

console.log(formProxy.login)       // tester
console.log(formProxy.password)    // 123
console.log(formProxy['username']) // Field with name username in objects doesnt exist

formProxy.password = '12'          // More than 2 characters. Right now is 2
console.log(formProxy.password)    // 123

// -------------------------------------------------------------------------------------


function log(message) {
    console.log('[Log]: ', message)
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        if (argArray.length === 1) {
            const x = Reflect.apply(target, thisArg, argArray)
            console.log('REFLECT HERE', x)
        } else {
            console.log('Количество аргументов не совпадает')
        }
    }
})

proxy('Custom message')             // [Log]:Custom message
proxy()                                       // Количество аргументов не совпадает
proxy('Message', 2)                 // Количество аргументов не совпадает

setInterval(() => {}, 20)