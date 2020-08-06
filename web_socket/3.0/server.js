const WebSocketServer = require('ws').Server;

const server = new WebSocketServer({port: 3000});
server.on('connection', function(response) {
    response.on('message', (message) => {
        server.clients.forEach((client) => {
            client.send(message);
        });
    })
});
