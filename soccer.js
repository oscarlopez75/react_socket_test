const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const test = require('./modules/test').test;

const port = process.env.PORT || 4800;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log("New connection from " + socket);
  test(socket);
  socket.on("disconnect", () => {
    console.log(socket + ' disconnected');
  })
});


server.listen(port, () => console.log(`Listening on port ${port}`));
