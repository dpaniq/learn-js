// inheritance

class Programmer {
    constructor (name) {
        this.name = name
    }

    code() {
        console.log(`${this.name} is coding...0`)
    }
}

class Frontend extends Programmer {
    angular() {
        console.log(`${this.name} is creating Angular App`)
    }
}

class Backend extends Programmer {
    nodejs() {
        console.log(`${this.name} is programming on Nodejs`)
    }
}

const programmer = new Programmer('Programmer')
programmer.code()

const frontend = new Frontend('Frontend')
const backend = new Backend('Backend')

frontend.code()
frontend.angular()

backend.code()
backend.nodejs()

// Could not extends by 2+ classes
class FullStack extends Frontend {
    fs() {
        console.log(`${this.name} can do everythings`)
    }
} 

const fullstack = new FullStack('FStack')

// Could use 'Composition api'