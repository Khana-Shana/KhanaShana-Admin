import React from 'react';
import "./Card.css";	
import {Link} from "react-router-dom";
	

const Card = () => {
	return (
		<div>
			
			<div className="grid-layout mt5"> {/* grid-layout css taken from https://stackoverflow.com/questions/8470070/how-to-create-grid-tile-view*/}
				
				<Link to="/order" type="button" className="item grow span-3"><h1 >Order Management</h1></Link>			
				<Link to="/adminMenu" type="button" className="item grow span-3 pa3" ><h1>Menu</h1></Link>	
				<Link to="/deals" type="button" className="item grow span-3"><h1>Deals & Discounts</h1></Link>
				<Link to="/customerSupport" type="button" className="item grow span-3"><h1 >Customer Support</h1></Link>
				<Link to="/adminDB" type="button" className="item grow span-3"><h1>Admin Database</h1></Link>
				<Link to="/customerDB" type="button" className="item grow span-3"><h1>Customer Database</h1></Link>
				<Link to="/createAccount" type="button" className="item grow span-3"><h1 >Create Account</h1></Link>
				<Link to="/order" type="button" className="item grow span-3"><h1 >Restaurant Details</h1></Link>

			</div>
		 	   
		</div>
	);
}
	

export default Card;

