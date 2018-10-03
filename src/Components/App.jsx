import React, { Component } from 'react';
import MainRouter from '../Router/MainRouter'
import NavContainers from '../Containers/NavContainers'
class App extends Component {
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
