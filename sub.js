const mqtt=require('mqtt')
const mongoose=require('mongoose')
mongoose.connect('mongodb://PREM:prem0131@cluster0-shard-00-00.9rlmb.mongodb.net:27017,cluster0-shard-00-01.9rlmb.mongodb.net:27017,cluster0-shard-00-02.9rlmb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{ useUnifiedTopology: true,useNewUrlParser: true  });
const {User,Auth}=require('./schema')
const client=mqtt.connect('http:localhost:1234')
var topic="prem"


client.on('message',(topic,messaage)=>{
    console.log(messaage.toString())
})
client.on('connect',()=>{
    console.log('subscriber')
    Auth.findOne({
      username:"prem",
      password:"prem0131"
    }).then((user)=>{
      if(user === null)
      {
        console.log("You are not Authorized")
      }
      else
      {
        console.log("Authorized")
        client.subscribe(topic)
        User
        .find({topic:topic})
        .then(user => {
          console.log(user)
        });
      }
    })
})
