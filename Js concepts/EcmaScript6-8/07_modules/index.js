import { COLOR, compute } from './modules'

compute(1,2)
console.log( COLOR )

import Logger from './modules'
Logger.log()

import * as Mod from './modules'

Mod.COLOR
Mod.compute()
Mod.default.log()