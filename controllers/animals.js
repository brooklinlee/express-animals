import { Animal } from '../models/animal.js'

function index(req, res) {
  Animal.find({})
  .then(animal => {
    res.render('animals/index')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

// function newAnimals(req, res) {
//   Animal.find({})
//   .then (animal => {
//     res.render('animals/index')
//   })
// }

export {
  index,
  // newAnimals as new,
}