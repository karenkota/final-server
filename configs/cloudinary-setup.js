const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret
});

var storage = cloudinaryStorage({
  cloudinary,
  folder: 'medical-recorder', 
  allowedFormats: ['jpg', 'png', 'jpeg', 'avi', 'mp4', 'wmv'],
  resource_type: ['image', 'video'], 
  filename: function (req, res, cb) {
    cb(null, res.originalname);
  }
});

const uploader = multer({ storage });
module.exports = uploader;