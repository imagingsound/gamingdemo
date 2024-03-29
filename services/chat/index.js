var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('message', function(from, msg){
    io.sockets.emit('broadcast', from, msg
    );
    console.log(from+":"+msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
