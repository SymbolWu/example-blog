import React, { Component } from 'react';
import MainRouter from '../Router/MainRouter'
// import host from '../Constants/HostConstants'

// import axios from 'axios'
import NavContainers from '../Containers/NavContainers'
class App extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <div>
        <NavContainers />
        <MainRouter />
      </div>
    );
  }
}

export default App;
