const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalRecorderSchema = new Schema({
  imageUrl: { type: String, required: false },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: Number, required: true },
  genere: { type: String, required: true },

  chronicDiseases: { type: String, required: true },
  familiarDiseases: { type: String, required: true },
  medicalTreatments: { type: String, required: true },

  descriptionClinical: { type: String, required: true },
  medicines: { type: String, required: true },
})

const medicalRecorder = mongoose.model('medicalRecorder', medicalRecorderSchema);
module.exports = medicalRecorder;