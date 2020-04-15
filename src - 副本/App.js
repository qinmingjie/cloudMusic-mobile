import React, { Fragment, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import "./static/css/index.css"
import {headerRouter,childRender} from "./router/index"
import Header from "./component/header"
import {useSelector} from "react-redux"
import {useLoading} from "./store/action/index"
import Play from "./component/play"
// y移动端组件
import Mheader from "./mobileconponemt/mheader"
import MNav from "./mobileconponemt/mnav"
function App(){
	let state = useSelector((state)=>{
		return state.loadingReducer.loadstore
	})
	let apploading = state
	return (
		<Fragment>
			<div className="App">
				<div className={apploading?"apploading":"apploadingend"}>
					<p id="loading">Loading<span>.</span><span>.</span><span>.</span></p>
				</div>
				<Play/>
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
