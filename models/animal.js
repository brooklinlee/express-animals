import mongoose from "mongoose"

const Schema = mongoose.Schema

const animalSchema = new Schema ({
  species: String,
  habitat: String,
  why: String
})

const Animal = mongoose.model('Animal', animalSchema)

export { Animal }