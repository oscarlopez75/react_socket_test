const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4700;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);
io.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    3000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});
const getApiAndEmit = socket => {
  try {
    const res = {
      data: {
        currently: 37
      }
    }
    socket.emit("FromAPI", res.data.currently);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};
server.listen(port, () => console.log(`Listening on port ${port}`));
