import { Router } from 'express'
import { getApi, home } from './controller.js'

const api = Router()

app.get('/', home)
app.get('/api', getApi)

export default api
