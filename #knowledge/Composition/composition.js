// composition

function createProgrammer(name) {
    const programmer = {name}
    return {
        ...programmer,
        ...canCode(programmer)
    }
}

function canCode( {name} ){
    return {
        code: () => console.log(`${name} is coding...`)
    }
}

function canAngular( {name} ){

    return {
        angular: () => console.log(`${name} is creating Angular App`)
    }
}

function canNodejs( {name} ){

    return {
        nodejs: () => console.log(`${name} is programming on NodeJS`)
    }
}

function createFrontend(name) {
    const programmer = createProgrammer(name)
    return {
        ...programmer,
        ...canAngular(programmer)
    }
}

function createBackend(name) {
    const programmer = createProgrammer(name)
    return {
        ...programmer,
        ...canAngular(programmer)
    }
}



const alone = createProgrammer('mongo')
console.log(alone)

const frontend = createFrontend('Frontend')
frontend.code()
frontend.angular()