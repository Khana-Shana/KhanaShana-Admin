import React from 'react';
import {Link} from "react-router-dom";
import "./card2.css";	
	

const Card = () => {
	return (
			
		<div class="tile-wrapper">
            <div class="tile-container mt5">
               
				<Link to="/order" type="button" className="tile sixth grow"><h1 >Order Management</h1></Link>			
				<Link to="/adminMenu" type="button" className="tile sixth grow pa3" ><h1>Menu</h1></Link>	
				<Link to="/deals" type="button" className="tile sixth grow"><h1>Deals & Discounts</h1></Link>
				<Link to="/customerSupport" type="button" className="tile sixth grow"><h1 >Customer Support</h1></Link>
				<Link to="/adminDB" type="button" className="tile sixth grow"><h1>Admin Database</h1></Link>
				<Link to="/customerDB" type="button" className="tile sixth grow"><h1>Customer Database</h1></Link>
				<Link to="/createAccount" type="button" className="tile sixth grow"><h1 >Create Account</h1></Link>
				<Link to="/order" type="button" className="tile sixth grow"><h1 >Restaurant Details</h1></Link>

            </div>
		</div>
	);
}
	

export default Card;

