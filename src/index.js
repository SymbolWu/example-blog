import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import {mockData} from './Constants/MockData'

mockData();
ReactDOM.render(<App />, document.getElementById('root'));

