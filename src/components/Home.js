import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

class Home extends Component{
  state = {
    endpoint: "localhost:4800",
    data: null,
    message1: null
  }

  socket = null;

  sendMessage = () => {
      this.socket.emit('fromWeb', {
        token: 'dgdgdgd6565656',
        name: 'Oscar'
      })


  }


  componentDidMount() {
    this.socket = socketIOClient(this.state.endpoint)

    this.socket.on('test', (data) => {
      this.setState({
        data: data
      })
    });

    this.socket.on('restoweb', (data) => {
      this.setState({
        message1: data
      })
    });

    this.socket.on('getout', (data) => {
      console.log(data);
      this.socket.disconnect();
    });

  }

  render(){
    return(
      <div className="home dashed">
        <h2>Home Page</h2>
        <p>{this.state.data}</p>
        <br />
        <p>{this.state.message1}</p>
        <br />
        <button type="button" onClick={this.sendMessage}>Emit Message</button>
      </div>
    )
  }
}


export default Home;
