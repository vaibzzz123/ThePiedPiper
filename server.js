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

io.on('connection', (socket) => {

    socket.on('update', (msg) => {
        console.log(msg);
        io.emit('update', msg);
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