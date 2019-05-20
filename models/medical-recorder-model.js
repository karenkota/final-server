const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalRecorderSchema = new Schema({
  fullname: { type: String, required: true },
  age: { type: Number, required: true },
  genere: { type: String, required: true },
  typeblood: { type: String, required: true },
  cpf: { type: Number, required: true },
  rg: { type: Number, required: true },
  password: { type: String, required: true },
  medicalagreement: { type: String, required: true },
  phone: { type: Number, required: true },
  adress: { type: String, required: true },
  chronicdiseases: { type: String },
  familiardiseases: { type: String },
  medicaltreatments: { type: String },
  description: { type: String, required: true },
  medicines: { type: String, required: true },
  upload: { type: String }
})

const medicalRecorder = mongoose.model('medicalRecorder', medicalRecorderSchema);
module.exports = medicalRecorder;