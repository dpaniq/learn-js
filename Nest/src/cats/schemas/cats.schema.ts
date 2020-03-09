import * as mongoose from 'mongoose'

export const CatsSchema = new mongoose.Schema({
        id: String,
        age: Number,
        birth: Date
})