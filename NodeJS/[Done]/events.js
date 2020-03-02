const EventEmitter = require('events')

// const emitter = new EventEmitter()

// // Listener
// emitter.on('anything', data => {
//     setTimeout(() => {
//         console.log('ON: anything', data)
//     }, 4000)
// })

// // Dispatch
// emitter.emit('anything', {a:1})


// Own events

class Dispatcher  extends EventEmitter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]')
        this.on(eventName, cb)
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
    console.log('ON: aa', data)
})

dis.dispatch('aa', {aa: 22})