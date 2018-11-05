import React, { Component } from 'react';
import socketIOClient from "socket.io-client";


class Token extends Component {

  state = {
    data: null,
    token: null,
    username: null,
    password: null,
    auth: false

  }

  socket = null;
  endpoint = "localhost:8080";

  componentDidMount() {
    this.socket = socketIOClient(this.endpoint);

    this.socket.on('usercheck', (data) => {
      this.setState({
        data: data
      })
    });

    this.socket.on('usertoken', (data) => {
      console.log(data);
      if(data.auth){
        this.setState({
          data: null,
          auth: true,
          token: data.jwt
        })
      }else{
        this.setState({
          data: data.message,
          auth: false,
          token: null
        })
      }
    })


  };

  handleChange = (e) =>{
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) =>{
      e.preventDefault();
      this.socket.emit('userWeb', {
        username: this.state.username,
        password: this.state.password,
        ip: '192.0.1.3'
      })
  }


  render(){
    return(
      <div className="dashed">
        <h2>Token Page</h2>
          <div className="container-fluid">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">User name:</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter user name" onChange={this.handleChange} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                </div>
                <br />
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <br />
            <h5>{this.state.data} </h5>
            <h5>{this.state.token} </h5>
          </div>
      </div>
    )
  }
}

export default Token;
