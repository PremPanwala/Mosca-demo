const mqtt=require('mqtt')

const client=mqtt.connect('http:localhost:1234')



client.on('message',(topic,messaage,clients)=>{
    console.log("Inside message")
    console.log(messaage.toString())
    //console.log(clients)
})


client.on("connect", function(packet) {
    console.log("Inside connect")
    client.subscribe("prem",{retain:true})
 
  });
  




