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
					<Link to="/order" type="button" className="btn w-50" style={{backgroundColor: props.colr==0?"#955F61":"#5c5a5a"}}>Queue</Link>
					<Link to="/completedOrders" type="button" className="btn w-50" style={{backgroundColor: props.colr==1?"#955F61":"#5c5a5a"}}>Completed Orders</Link>
					<Link to="/history" type="button" className="btn w-50" style={{backgroundColor: props.colr==2?"#955F61":"#5c5a5a"}}>History</Link>
				</div>   
			</div>
		);		
}


export default OrderMngNav;
