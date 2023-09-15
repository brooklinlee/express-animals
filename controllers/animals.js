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
  Animal.create(req.body)
  .then(animal => {
    res.redirect('/animals')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res) {
  Animal.findById(req.params.animalId)
  .then(animal => {
    res.render('animals/edit', {
      animal: animal
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function edit(req, res) {
  Animal.findById(req.params.animalId)
  .then(animal => {
    res.render('animals/edit', {
      animal: animal
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function editSpecies(req, res) {
  Animal.findById(req.params.animalId)
  .then(animal => {
    res.render('animals/edit/species', {
      animal: animal
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}
function editHabitat(req, res) {
  Animal.findById(req.params.animalId)
  .then(animal => {
    res.render('animals/edit/habitat', {
      animal: animal
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}
function editWhy(req, res) {
  Animal.findById(req.params.animalId)
  .then(animal => {
    res.render('animals/edit/why', {
      animal: animal
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteAnimal(req, res) {
  Animal.findByIdAndDelete(req.params.animalId)
  .then(animal => {
    res.redirect('/animals')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function update(req, res) {
  Animal.findByIdAndUpdate(req.params.animalId, req.body, {new:true})
  .then(animal => {
    res.redirect(`/animals`)
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
  deleteAnimal as delete,
  update,
  show,
  edit,
  editSpecies,
  editHabitat,
  editWhy,
}