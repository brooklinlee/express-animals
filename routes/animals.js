import { Router } from 'express'
import * as animalsCtrl from '../controllers/animals.js'

const router = Router()

// GET localhost:3000/users
router.get('/', animalsCtrl.index)
router.get('/new', animalsCtrl.new)
router.get('/:animalId', animalsCtrl.show)
router.get('/:animalId/edit', animalsCtrl.edit)
router.get('/:animalId/edit/species', animalsCtrl.editSpecies)
router.get('/:animalId/edit/habitat', animalsCtrl.editHabitat)
router.get('/:animalId/edit/why', animalsCtrl.editWhy)
router.post('/', animalsCtrl.create)
router.delete('/:animalId', animalsCtrl.delete)
router.put('/:animalId', animalsCtrl.update)


export { router } 
