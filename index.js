import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//Material Design Bootstrap
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

// import { createHashHistory } from "history";
// import { BrowserRouter, Route } from 'react-router-dom'

// import routes from "./Components/Routes";
// const allRoutes = routes;

ReactDOM.render(<App/>, document.getElementById('app'));

