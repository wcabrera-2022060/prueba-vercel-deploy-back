import mongoose from 'mongoose'

export const connectdb = async () => {
  try {
    await mongoose.connect('mongodb+srv://des:41404128Cel@cluster0.aav35uw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('Database connected')
  } catch (error) {
    console.log('Error connecting to database', error)
  }
}