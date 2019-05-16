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

// create in mongo - 
router.post('/NewMedicalRecorder/create', (req, res, next) => { 
  medicalRecorder.create(req.body)
    .then( response => {
        res.status(200).json(response);
    })
    .catch( err => next(err) );
});

module.exports = router;
