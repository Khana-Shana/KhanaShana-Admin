import React , { useState, useEffect } from 'react';
import './OrderMng.css';
import OrderQ from './OrderQ.jsx';
import OrderMngNav from './OrderMngNav.jsx';
import CompletedOrders from './CompletedOrders.jsx';
import OrderHistory from './OrderHistory.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function OrderMng() {
		return(
			<Router>

			<div className="tc">
					
					<Switch>
						<Route path="/order">
							
							<OrderMngNav colr="0"/>
							<OrderQ/>
						</Route>
						<Route path="/completedOrders">
							<OrderMngNav colr="1"/>
							<CompletedOrders/>
						</Route>
						<Route path="/history">
							<OrderMngNav colr="2"/>
							<OrderHistory/>
						</Route>
					</Switch>
			
			</div>
			</Router>
		
		);
		
}


export default OrderMng;