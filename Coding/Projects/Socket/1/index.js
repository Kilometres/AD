var express = require('express');
var soc = require('socket.io');

// App Setup
var app = express();
var server = app.listen(4000, function() {
  console.log("Listening to requests on PORT:4000");
})

// Static files
app.use(express.static('public'));

// Socket Setup
var io = soc(server);

io.on('connection', function(socket) {
  console.log("Made socket connection.", socket.id);

  // Chat Events
  socket.on('chat', function(data) {
    io.sockets.emit('chat', data);
    console.log(`'${data.handle}' said '${data.message}'`);
  });

  // Typing Events
  socket.on('typing', function(data) {
    socket.broadcast.emit('typing', data);
  })

})
