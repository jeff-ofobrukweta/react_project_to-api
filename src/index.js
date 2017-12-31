import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Navigation_bar/navigation_bar.js';
import BodyBackgroundColor from 'react-body-backgroundcolor';
import {Provider} from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(<Provider store={StoreInstance}>
<div className='blue_backgroundHomePage'>
    <NavigationBar/>
</div>
</Provider>
, document.getElementById('root'));
registerServiceWorker();

      