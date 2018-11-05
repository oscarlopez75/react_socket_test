
const test = (socket) =>{

  setInterval(() => {
    socket.emit('test', 'Testing the socket')
    // console.log('Testing the socket');
  }, 2000)

  setInterval(() => {
    socket.emit('test', 'Testing the socket again')
    // console.log('Testing the socket again');
  }, 5500)

  setInterval(() => {
    socket.emit('getout', 'I am disconecting you fucker')
    // console.log('Testing the socket again');
  }, 8000)

  socket.on('fromWeb', (data) => {
    console.log(data);
    socket.emit('restoweb', 'received message thanks')
  })

  socket.conn.on('packet', (packet) =>{
    console.log(packet.type);
  })
}



module.exports.test = test;
