const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Pizza = require('./models/pizzaModels')

const Pizzas = require('./data/imagedata')

connectDb()

const importData = async () => {
  try {
    await Pizza.deleteMany()
    const sampleData = Pizzas.map(pizza => { return { ...pizza } })
    await Pizza.insertMany(sampleData)
  } catch (error) {

  }
}

const dataDestroy = () => {


}

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
