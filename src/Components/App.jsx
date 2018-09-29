import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log('process',process.env);
    return (
      <div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
