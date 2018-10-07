import React, { Component } from 'react';
import MainRouter from '../Router/MainRouter'
import NavContainers from '../Containers/NavContainers'
import FooterComponent from '../Components/Public/FooterComponent'
import BackTopComponent from '../Components/Public/BackTopComponent'
class App extends Component {
  render() {
    return (
      <div>
        <NavContainers />
        <MainRouter />
        <FooterComponent />
        <BackTopComponent />
      </div>
    );
  }
}

export default App;
