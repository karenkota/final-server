const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  CRM: Number,
  specialist: String ,
  assignature: String
}, 
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;