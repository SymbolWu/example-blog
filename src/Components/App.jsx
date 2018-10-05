import React, { Component } from 'react';
import MainRouter from '../Router/MainRouter'
import NavContainers from '../Containers/NavContainers'
import FooterComponent from '../Components/Public/FooterComponent'
class App extends Component {
  render() {
    return (
      <div>
        <NavContainers />
        <MainRouter />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
