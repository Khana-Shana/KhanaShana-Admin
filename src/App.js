import React from 'react';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import OrderMng from './components/OrderMng.jsx';
import AdminDB from './components/AdminDB.jsx';
import CustomerDB from './components/CustomerDatabase.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx';
import AdminProfile from './components/AdminProfile.jsx';
import CustomerSupport from './components/CustomerSupport.jsx';
import AdminMenu from './components/AdminMenu.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import AdminDeals from './components/AdminDeals.jsx';
import AdminCreateAccount from './components/AdminCreateAccount.jsx'
import Login from "./components/login";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgotpassword";
import DiscountWheel from './components/DiscountWheel.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App(){
	return(
			<Router>
				<div>

					<Header />

					<Switch>

						<Route path="/adminDB"> {/* Routes to the Admin Database Screen*/}
							<AdminDB/>
						</Route>
			          
			        	<Route path="/order"> {/*Routes to the Order Management Screen*/}
			        		<OrderMng/>
			        	</Route>		
			          
			          <Route path="/customerDB"> {/*Routes to the Customer Database Screen*/}
			            <CustomerDB/>
			          </Route>		
			          
			          <Route path="/restDetails"> {/*Routes to the Restaurant Details Screen*/}
			          	<RestaurantDetails/>
			          </Route>     

			          <Route path="/adminProfile"> {/*Routes to the Profile Screen*/}
			          	<AdminProfile />
			          </Route>
			          
			          <Route path="/customerSupport"> {/*Routes to the Customer Feedback Screen*/}
			          	<CustomerSupport/>
			          </Route>
			          
			          <Route path="/adminMenu"> {/*Routes to the Menu Screen*/}
			          	<AdminMenu />
			          </Route>

					<Route path="/createAccount"> {/*Routes to the Create Account Screen*/}
						<Signup/>
					</Route>

					<Route path="/login"> {/*Routes to the Login Screen */}
						<Login/>
					</Route>

					  <Route path="/deals"> {/*Routes to the Deals Screen*/}
			          	<AdminDeals/>
			          </Route>
			          
			          <Route path="/wheel"> {/* Routes to the Wheel Screen*/}
			          	<DiscountWheel/>
			          </Route>

					  <Route path="/resetpassword"> {/*Routes to the Deals Screen*/}
			          	<ForgotPassword/>
			          </Route>
			          
			          <Route path="/"> {/*Homepage*/}
			            <Card/>
			          </Route>
			        
			        </Switch>
						
				</div>
			</Router>
			
		);
	}



export default App;

