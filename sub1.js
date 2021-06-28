const mqtt=require('mqtt')
const client=mqtt.connect('http:localhost:1234')
const mongoose=require('mongoose')
mongoose.connect('mongodb://PREM:prem0131@cluster0-shard-00-00.9rlmb.mongodb.net:27017,cluster0-shard-00-01.9rlmb.mongodb.net:27017,cluster0-shard-00-02.9rlmb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{ useUnifiedTopology: true,useNewUrlParser: true  });
const {User,Auth}=require('./schema')
var topic1="pan"



client.on('message',(topic1,messaage)=>{
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
          client.subscribe(topic1)
          User
        .find({topic:topic1})
        .then(user => {
          console.log(user)
        });
        }
      })
  
   
})
