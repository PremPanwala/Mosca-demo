const mosca=require('mosca')
var ascoltatore = {
  //using ascoltatore
  type: 'mongo',		
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var moscaSettings = {
  port: 1883,
 backend: ascoltatore,
  persistence: {
    factory: mosca.persistence.Mongo,
    url: 'mongodb://localhost:27017/mqtt'
  }
};

   
  var server = new mosca.Server(moscaSettings);
server.on('ready', setup);

server.on('clientConnected', function(client) {
	console.log('client connected', client.id);		
});

// Sending data from mosca to clients
var message = {
  topic: '/hello/world',
  payload: 'abcde', // or a Buffer
  qos: 0, // 0, 1, or 2
  retain: false // or true
};
// server.publish(message, function() {
//   console.log('done!');
// });

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet);
});

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running')
}