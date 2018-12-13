import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//For getting individual routes to work. 
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Router, Route, Link } from "react-router-dom";

//Material Design Bootstrap
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './lib/animate.min.css';

//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './components/Store/Reducer';
const store = createStore(rootReducer);

// document.body.style.zoom="80%";
//HashHistory works for github pages but not on browser router with godaddy domain. 
import createHashHistory from 'history/createHashHistory';
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component={App} />
        </Router>
    </Provider>,
    document.getElementById('app'));

