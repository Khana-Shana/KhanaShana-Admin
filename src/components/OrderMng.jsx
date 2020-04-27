import React from 'react';
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

						<Route path="/order">  {/*Routes to the Order Queue Screen*/}
							<OrderMngNav colr="0"/>  {/*Order Navbar is called with colr props for conditionally rendering the buttons*/}
							<OrderQ/>
						</Route>

						<Route path="/completedOrders"> {/*Routes to the Completed Order Screen*/}
							<OrderMngNav colr="1"/>
							<CompletedOrders/>
						</Route>
					
						<Route path="/history"> {/*Routes to the Order History Screen*/}
							<OrderMngNav colr="2"/>
							<OrderHistory/>
						</Route>
					
					</Switch>
	
				</div>
			</Router>
		
		);
		
}


export default OrderMng;