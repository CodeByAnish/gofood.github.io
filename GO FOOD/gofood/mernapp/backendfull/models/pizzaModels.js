const mongoose = require('mongoose')


const pizzaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  varients: [],
  prices: [],
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
},
  { timestamps: true }
);

const pizzaModels = mongoose.model('pizza', pizzaSchema);
module.exports = pizzaModels;