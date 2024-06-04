import express from 'express'
import routes from '../src/routes.js'

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)

export const innitServer = () => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}