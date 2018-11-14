import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//For getting individual routes to work. 
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Router, Route, Link } from "react-router-dom";

import Home from './components/Home'
//Material Design Bootstrap
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './lib/animate.min.css';
// document.body.style.zoom="80%";
//HashHistory works for github pages but not on browser router with godaddy domain. 
import createHashHistory from 'history/createHashHistory';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={App} />
    </Router>,
    // <Router>
    //     <Route component={App} />
    // </Router>,
    document.getElementById('app'));

// ReactDOM.render(<App/>, document.getElementById('app'));

