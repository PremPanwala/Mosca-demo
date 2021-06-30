const mqtt=require('mqtt')
const client=mqtt.connect('http:localhost:1234')


var msg={}
client.on('connect',()=>{
  console.log("connected Succesfully")
   client.publish("prem", "bacnacy vale dhoom dhoom",{qos:0,retain:true},function() {
      console.log('done!');
    })
    // client.publish("nodejs", "hi node",{qos:1,retain:true},function() {
    //   console.log('done!');
    // })
});

