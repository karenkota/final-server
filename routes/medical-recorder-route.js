const express = require('express');
const router  = express.Router();

// include the model
const medicalRecorder = require('../models/medical-recorder-model');

// route to mongo dbs
router.get('/medicalRecorder', (req, res, next) => {
  medicalRecorder.find()
    .then(medicalRecorderFromDB => {
        res.status(200).json(medicalRecorderFromDB)
    })
    .catch(err => next(err))
})

// create in mongo
router.post('/medicalRecorder/create', (req, res, next) => { 
  medicalRecorder.create(req.body)
    .then( aNewMedicalRecorder => {
        res.status(200).json(aNewmedicalRecorder);
    })
    .catch( err => next(err) );
});

module.exports = router;
