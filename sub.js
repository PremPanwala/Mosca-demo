const mqtt=require('mqtt')
const mongoose=require('mongoose')
mongoose.connect('PASTE_YOUR_URL HERE');
const {User}=require('./schema')
const client=mqtt.connect('http:localhost:1234')
var topic="prem"


client.on('message',(topic,messaage)=>{
    console.log(messaage.toString())
})
client.on('connect',()=>{
    console.log('subscriber')
    client.subscribe(topic)
    User
   .find()
   .then(user => {
     console.log(user)
   });
   
})
