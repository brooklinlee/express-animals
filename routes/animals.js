import { Router } from 'express'
import * as animalsCtrl from '../controllers/animals.js'

const router = Router()

// GET localhost:3000/users
router.get('/', animalsCtrl.index)

export { router }
