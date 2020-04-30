import React from 'react';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import OrderMng from './components/OrderMng.jsx';
import AdminDB from './components/AdminDB.jsx';
import CustomerDB from './components/CustomerDatabase.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx';
import AdminProfile from './components/AdminProfile.jsx';
import CustomerSupport from './components/CustomerSupport.jsx';
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
			          
			          <Route path="/"> {/*Homepage*/}
			            <Card/>
			          </Route>
			        
			        </Switch>
						
				</div>
			</Router>
			
		);
	}



export default App;

