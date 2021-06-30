const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   email: String,
   password:String
   
 })
 const User = mongoose.model("Author", UserSchema);

const authschema=new Schema({
  email: String,
   password:String
})
const Auth=mongoose.model("authentication",authschema)
module.exports = {User,Auth}