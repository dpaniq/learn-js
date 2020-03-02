// Context

// Определяет, как функция была вызвана - указывает на ключевое слово `this`

const person = {
    surname: 'Stark',
    knows: function (what, name) {
        console.log(`You ${what} knows, ${name} ${this.surname}`)
    }
}

const john = {surname: 'Snow'}

person.knows('all', 'Bran')


person.knows.call(john, 'nothing', 'John')
person.knows.call(john, ...['nothing', 'John'])
person.knows.apply(john, ['nothing', 'John'])
person.knows.bind(john, 'nothing', 'John')()
const bound = person.knows.bind(john, 'nothing', 'John')
bound()

// -------------------------------------------------------------------------------------
