const express = require('express');
const path = require('path');

var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

//************************************************************
var http = require('http').Server(app);
var io = require('socket.io')(http);
//************************************************************

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build'))); //since index.html in dist is static


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html')); //send all requests to our page to dist
});

//************************************************************
io.on('connection', function(socket){
  console.log('a user connected');
});
//************************************************************

const PORT = 4700;

app.listen(PORT, (req, res) => {
  console.log('Running on port ' + PORT);
});
