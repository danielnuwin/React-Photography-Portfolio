import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
//Material Design Bootstrap
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './lib/animate.min.css';
// document.body.style.zoom="80%";

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <Route component={App} />
    </Router>,
    document.getElementById('app'));

// ReactDOM.render(<App/>, document.getElementById('app'));

