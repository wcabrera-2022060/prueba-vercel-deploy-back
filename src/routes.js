import { Router } from 'express'
import { api, home } from './controller.js'

const api = Router()

app.get('/', home)
app.get('/api', api)

export default api
