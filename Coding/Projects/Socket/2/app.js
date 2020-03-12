var express = require('express');
var soc = require('socket.io');

var app = express();

var server = app.listen(4000, function() {
  console.log('Listening to requests on PORT:4000');
})

app.use(express.static('public'));

var io = soc(server);

io.on('connection', function(socket) {
  console.log(`Connection: ${socket.id}`);

  socket.on('btnclick', function() {
    io.sockets.emit('btnclick');
  });
})
