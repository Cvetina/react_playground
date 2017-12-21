var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter, Route } from "react-router-dom";
import App from './components/App.jsx';
import About from './components/About.jsx';
import Layout from './components/Layout.jsx';

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('app')
	);