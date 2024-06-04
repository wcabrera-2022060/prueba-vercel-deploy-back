import express from 'express'
import routes from './src/routes.js'

const app = express()

const port = process.env.PORT || 3000

app.use(routes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
