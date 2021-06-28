

const mosca=require('mosca')
const mongoose=require('mongoose')
mongoose.connect('mongodb://PREM:prem0131@cluster0-shard-00-00.9rlmb.mongodb.net:27017,cluster0-shard-00-01.9rlmb.mongodb.net:27017,cluster0-shard-00-02.9rlmb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{ useUnifiedTopology: true,useNewUrlParser: true  });
const {User}=require('./schema')
var settings = {
    port: 1883,
    
  };
   
  var server = new mosca.Server(settings);


  server.on('ready',()=>{
    console.log("Broker is Up and running")
})

server.on('published',(packet)=>{
    if(packet.payload.toString().slice(0,1) != '{' && packet.payload.toString().slice(0,4) != 'mqtt')
    {
        console.log(packet.topic)
        User.create({
            msg:packet.payload.toString(),
            topic:packet.topic
            
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database."+err);
            //res.status(200).send(user);
            console.log(user)
        });
        
    }
    
})
