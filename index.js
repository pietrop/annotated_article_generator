'use strict';
var mqtt = require('mqtt');
var io = require('socket.io').listen(8002);

io.sockets.on('connection', function (er,socket) {
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
});
io.on('error', function () {});

var client  = mqtt.connect('mqtt://iot.eclipse.org/bbc/subtitles/bbc_news24/compacted');

// https://github.com/mqttjs/MQTT.js#mqttclientsubscribetopictopic-arraytopic-object-options-callback
client.subscribe('bbc/subtitles/bbc_news24/raw', function(es){
  console.info('connected to MQTT BBC Channel', es);
});

client.on('connect', function (es) {
  console.info('connected to BBC caption feed!',JSON.stringify(es,null,2));
});

client.on('message', function (topic, message) {
  console.log('mqtt: ', message.toString());
  // 'forwards' it to socket connection
  // uses data.body to keep consistency with openedcaptions.com 'interface'
   io.emit('content', { data: {body: message.toString() } });
});