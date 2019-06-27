const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please give the pet a name"],
    minlength: [3, "The name for the pet must be at least 3 characters long"]
  },

  species: {
    type: String,
    required: [true, "Please determine the species of pet"],
    minlength: [3, "The type of the pet must be at least 3 characters long"]
  },

  breed: {
    type: String,
    required: [true, "Please determine the breed of pet"],
    minlength: [3, "The type of the pet must be at least 3 characters long"]
  },

  description: {
    type: String,
    required: [true, "Please describe the pet"],
    minlength: [10, "The description of the pet must be at least 10 characters long"]
  },

  skillOne: {
      type: String
  },

  skillTwo: {
      type: String
  },

  skillThree: {
      type: String
  },

  like: {
      type: Number,
      default: 0
  },
  
  liked: {
      type: Boolean,
      default: false
  }

}, {timestamps: true})

mongoose.model('Pet', PetSchema);