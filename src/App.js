import React from 'react';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import OrderQ from './components/OrderQ.jsx';
import CompletedOrders from './components/CompletedOrders.jsx';
import OrderHistory from './components/OrderHistory.jsx';
import AdminDB from './components/AdminDB.jsx';
import CustomerDB from './components/CustomerDatabase.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx';
import AdminProfile from './components/AdminProfile.jsx';
import CustomerSupport from './components/CustomerSupport.jsx';
import AdminMenu from './components/AdminMenu.jsx';
import AdminDeals from './components/AdminDeals.jsx';
import Login from "./components/login";
import Signup from "./components/signup";
import OrderMngNav from "./components/OrderMngNav.jsx";
import ForgotPassword from "./components/forgotpassword";
import DiscountWheel from './components/DiscountWheel.jsx'
import { CircularProgress } from "@material-ui/core";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import firebase_integration from './Fire.js'

function App(){
	
	const [firebaseInitialized, setFirebaseInitialized] = useState(false);
	const [userdata, setdata] = React.useState({})

	useEffect(() => {
		firebase_integration.isInitialized().then((val) => {
		  setFirebaseInitialized(val);
		});
	  });

	
	return firebaseInitialized !== false ? (
			<Router>
				<div>
					<Switch>											
					<Route exact path="/"> {/*Homepage*/}
						<Header />
						<Card/>
					</Route>
					<Route path="/adminDB"> {/* Routes to the Admin Database Screen*/}
						<Header />
						<AdminDB/>
					</Route>
					<Route path="/createAccount"> {/*Routes to the Create Account Screen*/}
						<Header />
						<Signup/>
					</Route>
					<Route path="/order"> {/*Routes to the Order Queue Screen*/}
						<Header />
						<div className="tc">
							<OrderMngNav colr="0"/> {/*Order Navbar is called with colr props for conditionally rendering the buttons*/}
							<OrderQ/>	
						</div>
					</Route>
					<Route path="/completedOrders"> {/*Routes to the Completed Order Screen*/}
						<Header />
						<div className="tc">
							<OrderMngNav colr="1"/>
							<CompletedOrders/>	
						</div>
					</Route>	
					<Route path="/history"> {/*Routes to the Order History Screen*/}
						<Header />
						<div className="tc">
							<OrderMngNav colr="2"/>
							<OrderHistory/>	
						</div>
					</Route>
					<Route path="/customerDB"> {/*Routes to the Customer Database Screen*/}
						<Header />
						<CustomerDB/>
					</Route>
					<Route path="/restDetails"> {/*Routes to the Restaurant Details Screen*/}
						<Header />
						<RestaurantDetails/>
					</Route>   
					<Route path="/adminProfile"> {/*Routes to the Profile Screen*/}
						<Header />
						<AdminProfile />
					</Route>
					<Route path="/customerSupport"> {/*Routes to the Customer Feedback Screen*/}
						<Header />
						<CustomerSupport/>
					</Route>
					<Route path="/adminMenu"> {/*Routes to the Menu Screen*/}
						<Header />
						<AdminMenu />
					</Route>
					<Route path="/login"> {/*Routes to the Login Screen */}
						<Login/>
					</Route>
					<Route path="/deals"> {/*Routes to the Deals Screen*/}
						<Header />
						<AdminDeals/>
					</Route>
					<Route path="/wheel"> {/* Routes to the Wheel Screen*/}
						<Header />
						<DiscountWheel/>
					</Route>
					<Route path="/resetpassword"> {/* Routes to the Reset Password Screen*/}
						<ForgotPassword/>
					</Route>
			        </Switch>
				</div>
			</Router>
		) : (
			<div>
			</div>
		  );
	}
	
export default App;

