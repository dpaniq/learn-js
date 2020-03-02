class Person {
    type = 'HUMAN'
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(this.name + ' says hello!')
    }
}

const max = new Person('max')
max.greet()
console.log(max)
console.log(max.type)
console.log(max.__proto__ == Person.prototype) // true


// -------------------------------------------------------------------------------------

class Programmer extends Person {
    constructor(name, job) {
        super(name)
        this._job = job
    }

    get job() {
        return this._job.toUpperCase()
    }

    set job(job) {
        if (job.length <= 2) {
            throw new Error ('Validation failed')
        } else {
            this._job = job
        }
0       
    }

    greet() {
        super.greet()
        console.log('Rewritten')
    }
}

const frontend = new Programmer('Max', 'Frontend')
console.log(frontend)
frontend.greet()
console.log(frontend.job)

frontend.job = 'Backend'
console.log(frontend.job)

// -------------------------------------------------------------------------------------
// Static
    // напрямую обращаться к классу и вызывать переменные и функции


