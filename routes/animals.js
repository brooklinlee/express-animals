import { Router } from 'express'
import * as animalsCtrl from '../controllers/animals.js'

const router = Router()

// GET localhost:3000/users
router.get('/', animalsCtrl.index)
router.get('/new', animalsCtrl.new)
router.get('/:animalId', animalsCtrl.show)
router.get('/:animalId/edit', animalsCtrl.edit)
router.post('/', animalsCtrl.create)
router.delete('/:animalId', animalsCtrl.delete)
router.put('/:animalId', animalsCtrl.update)


export { router } 
