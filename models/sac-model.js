const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sacSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
},
{
  timestamps: true
});

const sac = mongoose.model('sac', sacSchema);
module.exports = sac;