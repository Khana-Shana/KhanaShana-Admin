import React , { useState, useEffect } from 'react'; 	
import ReactBootstrap, {ToggleButtonGroup,ToggleButton,Nav, Button,ButtonGroup} from 'react-bootstrap';
import './OrderMngNav.css';

import {Link} from "react-router-dom";

function OrderMngNav(props) {

		return(

			<div>
				<div className="btn-group pa3 w-50">
				  <Link to="/order" type="button" className={props.colr==0?"btn w-50 white bg-dwyl":"btn w-50 black"}>Queue</Link>
				  <Link to="/completedOrders" type="button" className={props.colr==1?"btn w-50 white bg-dwyl":"btn w-50 black"}>Completed Orders</Link>
				  <Link to="/history" type="button" className={props.colr==2?"btn w-50 white bg-dwyl":"btn w-50 black"}>History</Link>
				</div>   
			</div>
		
		);	
{/*https://codepen.io/SachaJolly/pen/ZKmjPp?__cf_chl_jschl_tk__=faff809c78b46a7cb0131819d1886ea77a830b72-1587157225-0-AU919B_Vh7zXflooJzpuPOXs2UG0dyIQEisloMyjccPjU4agDCNqs-leZSr6nRsVLMX4BfbdSndzgumtuTUB5vHGoPJTSXjMn8I-f8oST7_Br6o4P2Nk8ACSdRSZg6MVhnD_0cciHRqXj6F6mm9OO3WgG8pj0UAGnb38YOS1UzRJN46k-qCr9QUSEH2fgiS8OwTiJ_KdQ4-8lUY7ZUXcpvS9g-PjM90-E4c0H03eyDYrgbWztsXsykZSHZshx1GGSKI1SmLVQJ7mYDFZ5HeCWC7fxY_Ql41JE4c0Djxn0btdaANCtQsM6w9QkbKc4c09qyLvrxQvNeRDQSbMLkGDB9BdTsqJPPuVEvmfGaNnSwdZ*/}			
		
		

	}


export default OrderMngNav;



// <div class="centered-container">
		  
// 		  <div class="actions">
// 		    <div class="actions-content"><a class="btn block" href="#"><span>Regular Order</span></a><a class="btn block" href="#"><span>Customized Order</span></a></div>
// 		  </div>
// 		</div>



				// <div class="centered-container pa2">

			 //  	   <div class="actions-content">
			 //  	   		<Link to="/order" class="btn block" href="#"><span className="aligning" >Queue</span></Link>
			 //  	   		<Link to="/completedOrders" class="btn block" href="#"><span className="aligning">Completed Orders</span></Link>
			 //  	   		<Link to="/history" class="btn block" href="#"><span className="aligning">History</span></Link>
			 //  	   	</div>

			 // 	</div>

				// <div className='pa2 aligning2' >
			 //      <input
			 //        className='pa3 ba b--black bg-white br-pill tr w-100 '
			 //        type='search'
			 //        placeholder='Search for Anything'
			 //        // onChange={searchChange}
			 //      />
		  //   	</div>


// <ToggleButtonGroup className=" pa3 w-40" type="radio" name="options" defaultValue={1}>
// 				    <ToggleButton  renderAs="button" className="bg-dwyl white " value={1}><Link to="/order" style={{ color: 'white' }}>Queue</Link></ToggleButton>
// 				    <ToggleButton  className="bg-dwyl white " value={2}><Link to="/completedOrders" style={{ color: 'white' }}>Completed Orders</Link></ToggleButton>
// 				    <ToggleButton  className="bg-dwyl white "  value={3}><Link to="/history" style={{ color: 'white' }}>History</Link></ToggleButton>
// 				  </ToggleButtonGroup>