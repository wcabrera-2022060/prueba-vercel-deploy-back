import { Router } from 'express'
import { getApi, home } from './controller.js'

const api = Router()

api.get('/', home)
api.get('/api', getApi)

export default api
