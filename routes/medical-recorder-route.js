const express = require('express');
const router  = express.Router();
const medicalRecorder = require('../models/medical-recorder-model');
const mongoose = require ('mongoose');


router.get('/medicalRecorder', (req, res, next) => {
  medicalRecorder.find()
    .then(medicalRecorderFromDB => {
        res.status(200).json(medicalRecorderFromDB)
    })
    .catch(err => next(err))
})

router.get('/medicalRecorder/:id', (req, res, next) => {
  medicalRecorder.findOne({_id: req.params.id})
    .then(medicalRecorderFromDB => {
        res.status(200).json(medicalRecorderFromDB)
    })
    .catch(err => next(err))
})

router.post('/NewMedicalRecorder/create', (req, res, next) => { 
  medicalRecorder.create(req.body)
    .then( response => {
        res.status(200).json(response);
    })
    .catch( err => next(err) );
});

router.put('/MedicalRecorder/edit/:id', (req, res, next) => { 
  medicalRecorder.findOneAndUpdate({_id: req.params.id}, req.body)
   .then((response) => {
      res.status(200).json(response);
    })
    .catch( err => next(err) );
});

router.delete('/MedicalRecorder/delete/:id', (req, res, next) => { 
  medicalRecorder.findOneAndRemove({_id: req.params.id})
    .then((response) => {
      res.status(200).json(response);
    })
    .catch( err => next(err) );
});

module.exports = router;
