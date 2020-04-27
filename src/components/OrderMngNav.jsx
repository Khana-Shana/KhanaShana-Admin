import React from 'react'; 	
import './OrderMngNav.css';
import {Link} from "react-router-dom";

function OrderMngNav(props) {
		//if props==0:Queue button remains highlighted;
		//if props==1:Completed Orders button remains highlighted
		//if props==2:History button remains highlighted;
		return(

			<div>
				<div className="btn-group pa3 w-50">
					<Link to="/order" type="button" className={props.colr==0?"btn w-50 white customColr":"btn w-50 black"}>Queue</Link>
					<Link to="/completedOrders" type="button" className={props.colr==1?"btn w-50 white customColr":"btn w-50 black"}>Completed Orders</Link>
					<Link to="/history" type="button" className={props.colr==2?"btn w-50 white customColr":"btn w-50 black"}>History</Link>
				</div>   
			</div>
		);		
}


export default OrderMngNav;
