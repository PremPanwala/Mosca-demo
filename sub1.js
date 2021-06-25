const mqtt=require('mqtt')
const client=mqtt.connect('http:localhost:1234')

var topic1="pan"



client.on('message',(topic1,messaage)=>{
    console.log(messaage.toString())
})

client.on('connect',()=>{
    console.log('subscriber')
    client.subscribe(topic1)
   
})
