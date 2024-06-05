import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from '../src/routes.js'

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

app.use(routes)

export const innitServer = () => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}