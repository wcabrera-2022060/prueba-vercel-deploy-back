import mongoose from 'mongoose'

export const connectdb = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/myapp')
    console.log('Database connected')
  } catch (error) {
    console.log('Error connecting to database', error)
  }
}