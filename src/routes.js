import { Router } from 'express'
import { create, list, test } from './controller.js'

const api = Router()

api.post('/create', create)
api.get('/test', test)
api.get('/', list)

export default api