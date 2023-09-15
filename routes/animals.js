import { Router } from 'express'
import * as animalsCtrl from '../controllers/animals.js'

const router = Router()

// GET localhost:3000/users
router.get('/', animalsCtrl.index)
router.get('/new', animalsCtrl.new)
router.post('/', animalsCtrl.create)


export { router } 
