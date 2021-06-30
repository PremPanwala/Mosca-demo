const mqtt=require('mqtt')
const client=mqtt.connect('http:localhost:1234')

var topic="prem"
var topic1="pan"


  //client.publish(topic,"hi"+req.body.msg)

  
  var message = {

    payload: 'abcde', // or a Buffer
    qos: 0, // 0, 1, or 2
    retain: false // or true
  };
client.on('connect',()=>{
  console.log("connected Succesfully")
   client.publish("prem", "panwala",{qos:1,retain:true},function() {
      console.log('done!');
    })
});
