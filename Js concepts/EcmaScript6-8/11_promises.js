
// Не удобно вызывать из-за большой вложеннести
setTimeout(() => {
    console.log('After delay')
}, 500)

// -------------------------------------------------------------------------------------
// Promises(resolve, reject) [catch, then, finaly]

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve!')
    }, 500)
})

promise.then(data => console.log(data))

// ------------------------------------------------------------------------------------- 

// RESOLVE
const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => resolve('DONE!'), ms)
})

// REJECT
// const delay = ms => new Promise((resolve, reject) => {
//     setTimeout(() => reject('DONE!'), ms)
// })

// delay(1000).then(data => console.log(data)) // DONE
//     .then(data => delay(600))
//     .then(data => console.log(data)) // DONE
//     .catch(err => console.log(err))
//     .finally(() => console.log('Finally'))


// ------------------------------------------------------------------------------------- 
// ASYNC AWAIT

async function asyncDelay() {
    // await PROMISE
    try {
        const data = await delay(2000)
        console.log(data)
    } catch (e) {
        console.log('Error', e)
    }
}

asyncDelay()

// ------------------------------------------------------------------------------------- 
// Promise.all

Promise.all([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))

// Promise.race()
Promise.race([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))
