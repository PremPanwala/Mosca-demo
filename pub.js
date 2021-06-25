const mqtt=require('mqtt')
const client=mqtt.connect('http:localhost:1234')
var topic="prem"
var topic1="pan"
client.on('connect',()=>{
    client.publish(topic,"hi bacancy")
})
client.on('connect',()=>{
    client.publish(topic1,"hi guys all")
})