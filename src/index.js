import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store/index"
import {Provider,useSelector} from "react-redux"
import {BrowserRouter,HashRouter} from "react-router-dom"
import "./static/js/index"
ReactDOM.render(
	<Fragment>
		<HashRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</HashRouter>
	</Fragment>
	,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
