const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Product = mongoose.model('Product', new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String, 
    required: true,
    minlength: 5,
    maxlength: 30,
    unique: true
  },
  price: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 1000,
    unique: false
  },
  resum: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 500
  },
}));

function validateUser (product) {
  const schema = Joi.object({
    id: Joi.number().integer(),
    title: Joi.string()
      .min(5)
      .max(30)
      .required(),
    price: Joi.string()
      .min(1)
      .max(1000)
      .required()
      .email(),
    resum: Joi.string()
      .min(5)
      .max(500)
      .required(),
  });
  return schema.validate(product);
}

module.exports = {
  Product: Product,
  Validate: validateUser
};
