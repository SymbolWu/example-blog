import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './Components/App';
import {mockData} from './Constants/MockConstants'
import configureStore from './Redux/Store/stores'

mockData();
ReactDOM.render((
    <Provider store={configureStore()}>
        <App />
    </Provider>
), document.getElementById('root'));

