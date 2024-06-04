import { Router } from 'express'
import { create, test } from './controller.js'

const api = Router()

api.post('/create', create)
api.get('/test', test)

export default api