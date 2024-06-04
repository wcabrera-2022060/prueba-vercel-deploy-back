import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  }
},{
  versionKey: false
})

export default model('User', userSchema)