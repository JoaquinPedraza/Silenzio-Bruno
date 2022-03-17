const mongoose = require ('mongoose');


const {Schema} = mongoose;

const funkoModel = new Schema (
  {
    name: { type: String},
    category: { type: String},
    ilimited: { type: Boolean},
    price: { type: String},
    origin: { type: String}
  }
)

module.exports = mongoose.model('Funko',funkoModel);