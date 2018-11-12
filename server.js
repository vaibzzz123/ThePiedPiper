const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const logicFunctions = require('./logic.js');
const {update, search} = logicFunctions;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//the 3 lines above are for parsing the body of a POST request

io.on('connection', (socket) => {

    socket.on('update', (msg) => { //once message is received
        console.log(msg); //console log the message
        io.emit('update', msg); //emit message to all clients on update channel
    });

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

app.post('/update', (req, res) => {
    update(req.body);
})

app.post('/search', (req, res) => {
    res.send(search(req.body));
})