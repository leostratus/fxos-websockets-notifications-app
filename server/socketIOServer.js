var socketIO = require('socket.io');

exports.start = function(onNewContent) {
  var httpServer = require('http').createServer().listen(8080);
  var socketIOServer = socketIO.listen(httpServer);

  onNewContent(function(data) {
     socketIOServer.sockets.volatile.emit('newContent', data);
  });
};
