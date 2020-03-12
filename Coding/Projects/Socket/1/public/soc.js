// Create Connection
var socket = io.connect('localhost:4000');

//Query DOM
var handle = document.getElementById('handle');
var msg = document.getElementById('msg');
var send = document.getElementById('btn');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// Emit Events
send.addEventListener('click', function() {
  socket.emit('chat', {
    message: msg.value,
    handle: handle.value
  });
  msg.value = "";
})

msg.addEventListener('keypress', function() {
  socket.emit('typing', handle.value);
})

// Listen for Events
socket.on('chat', function(data) {
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
  feedback.innerHTML = '';
});

socket.on('typing', function(data) {
  feedback.innerHTML = '<p><em>' + data + ' is typing...</em></p>';
});
