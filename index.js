// Iniciamos uma nova instância do socket.io passando o objeto http(o servidor http)
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
 
app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('mensagem', function(msg){
    io.emit('mensagem', msg);
  });
});
 
http.listen(3000, function(){
  console.log('listening on *:3000');
});