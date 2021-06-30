var express = require("express");
var router = express.Router();
const {User} =require("./schema");
const mongoose=require('mongoose')
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost:27017/mqtt',{ useUnifiedTopology: true,useNewUrlParser: true  });



router.post("/users",async (req, res) => {
    console.log("Inside route")
  try {
    const mqtt=require('mqtt')
    const client=mqtt.connect('http:localhost:1234')
    var user=new User({
      "email":req.body.email,
      "password":req.body.password
    })
    let ans=user.save()
    client.on('connect',()=>{
      console.log("connected Succesfully")
        client.publish("register", Buffer.from(JSON.stringify(user)),{qos:1,retain:true},function() {
          res.status(201).json({ message: "User Created Sucessfully" });
          console.log('done!');
        })
    });

   // channel.sendToQueue("user_created", Buffer.from(JSON.stringify(user)));

    
  } catch (error) {
    if (error.message)
      return res.status(400).json({ error: { message: error.message } });
    return res
      .status(500)
      .json({ error: { message: "Internal Server Error" } });
  }
});

module.exports = router;
