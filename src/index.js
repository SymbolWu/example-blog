import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import App from './Components/App';
import {mockData} from './Constants/MockConstants'
import configureStore from './Redux/Store/stores'

import 'babel-polyfill';

mockData();
ReactDOM.render((
    <Provider store={configureStore()}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
), document.getElementById('root'));

