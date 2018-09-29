import React, { Component } from 'react';
import host from '../Constants/ApiHost'

import axios from 'axios'
class App extends Component {
  componentDidMount(){
    console.log('componentDidMount:',host);
    axios({
      url:host+'wifiprobeinfo.do'
    }).then(response=>{
      console.log('response:',response);
    }).catch(error=>{
      console.log('error:',error);
    })
  }
  render() {
    console.log('process',process.env.Text[0]);
    console.log('host',host);
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
