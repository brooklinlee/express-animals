import { Animal } from '../models/animal.js'

function index(req, res) {
  Animal.find({})
  .then(animals => {
    res.render('skills/index', {
      animals: animals
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}


export {
  index,
}