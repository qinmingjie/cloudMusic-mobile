import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import "./static/css/index.css"
import {headerRouter,childRender} from "./router/index"
import Header from "./component/header"
import Index from "./views/index/index"
import {useSelector} from "react-redux"
import {Spin} from "antd"

function App() {
let state = (useSelector((state)=>{
	return state
}))
let loading = state.bannerReducer.loading
return (
	<Fragment>
		{/* <div className={loading?"loading":"loadingend"}>
			<p id="loading">Loading<span>.</span><span>.</span><span>.</span></p>
		</div> */}
		<div className="App">
			<Header/>
			<Switch>
				{headerRouter.map((item,index)=>{
					return(
						<Route
							key={index}
							path={item.path}
							exact={item.exact}
							render={(props)=>{
								return item.render(props)
							}}
						></Route>
					)
				})}
				{childRender.map((item,index)=>{
					return(
						<Route
							key={index}
							path={item.path}
							exact={item.exact}
							render={(props)=>{
								return item.render(props)
							}}
						></Route>
					)
				})}
			</Switch>
		</div>
	</Fragment>
  );
}

export default App;
