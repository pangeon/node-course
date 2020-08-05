const WebSocketServer = require('ws').Server;

const server = new WebSocketServer({port: 3000});
server.on('connection', function(response) {
    response.send('Hello World');
    response.on('message', (message) => {
        console.log(message);
    })
});
