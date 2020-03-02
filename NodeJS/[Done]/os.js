const os = require('os')

console.log('ОС', os.platform())
console.log('Архитектура процессора', os.arch())
console.log('Процеесоры', os.cpus())
console.log('Свободная память', os.freemem())
console.log('Всего памяти', os.totalmem())

console.log('Домашняя директория', os.homedir())
console.log('Сколько времени включена система', new Date(os.uptime()).getHours())

// OS

// os.EOL
// os.constants

// os.endianness()
// os.getPriority([pid])
// os.hostname()
// os.loadavg()
// os.networkInterfaces()
// os.release()
// os.setPriority([pid, ]priority)
// os.tmpdir()
// os.type()
// os.userInfo([options])

// OS Constants
// Signal Constants
// Error Const