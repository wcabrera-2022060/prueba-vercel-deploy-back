import { Router } from 'express'
import { createUser, getApi, home } from './controller.js'

const api = Router()

api.get('/', home)
api.get('/api', getApi)
api.post('/create', createUser)

export default api
