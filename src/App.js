import React, { Component } from 'react';

import './App.css';
// import Home from './components/Home';
import Token from './components/Token'


class App extends Component {

  state = {
    response: null,
    endpoint: "localhost:4700"
  }

  // componentDidMount() {
  //   const { endpoint } = this.state;
  //   // console.log('por aqui');
  //   const socket = socketIOClient(endpoint);
  //   // socket.on("FromAPI", data => this.setState({ response: data }));
  //   socket.on("FromAPI", data =>{
  //     console.log('socket on');
  //     this.setState({ response: data })
  //   })
  // }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Hola</h1>

        </div>

        <br />
        <Token />
      </div>
    );
  }
}

export default App;
