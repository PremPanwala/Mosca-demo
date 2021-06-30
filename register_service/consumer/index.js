const mqtt=require('mqtt')
const client=mqtt.connect('http:localhost:1234')
const{Auth}=require('../../user_service/routes/schema')
const mongoose=require('mongoose')
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost:27017/mqtt',{ useUnifiedTopology: true,useNewUrlParser: true  });
    client.on('message',(topic,messaage)=>{
        console.log("Inside message")
        console.log(topic)
        
        switch(topic) {
            case "prem":
              // code block
              console.log(messaage.toString())
              break;
            case "register":
              // code block
              console.log("Chali gayu",messaage.toString())
              let authobject=JSON.parse(messaage.toString());
              const {email,password}=authobject
              var user=new Auth({
                "email":email,
                "password":password
              })
              let ans=user.save()
              break;
            default:
              // code block
              console.log("kasas ma j ni gusyu")
          }
    })


client.on("connect", function(packet) {
    console.log("Inside connect")
    client.subscribe("prem",(data)=>{
        console.log("This is needed data",data)
    })
    client.subscribe("register",(data)=>{
        console.log("This is needed data",data)
    })
 
  });