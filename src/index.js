import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root';
import configureStore from './store';
import MainRoutes from './components/Main';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(<Root store={store} comp={MainRoutes} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
