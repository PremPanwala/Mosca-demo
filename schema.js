const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   msg: String,
   
 })
 const User = mongoose.model("Author", UserSchema);


module.exports = {User}