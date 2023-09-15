import { Animal } from '../models/animal.js'

function index(req, res) {
  Animal.find({})
  .then(animals => {
    res.render('animals/index', {
      animals: animals
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newAnimal(req, res) {
  res.render('animals/new')
}

function create(req, res) {
  req.body.huggable = true
  req.body.habitat = "habitat"
  Animal.create(req.body)
  .then(animal => {
    res.redirect('/animals')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  newAnimal as new,
  create,
}