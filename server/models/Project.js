const { Schema, model } = require("mongoose");
const dateFormat = require("..utils/dateFormat");

const projectSchema = new Schema({
  title: {
    type: String, 
    required: "Please enter title for your project!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  
})