import React from 'react';
import "./Card.css";	
	

const Card = () => {
	return (
		<div>
			
			<div className="grid-layout mt5"> {/* grid-layout css taken from https://stackoverflow.com/questions/8470070/how-to-create-grid-tile-view*/}
				
				<a type="button" href="/order" className="item grow span-3"><h1 className="mera">Order Management</h1></a>				
				<a type="button" href="/notImplemented" className="item grow span-3 pa3" ><h1>Menu</h1></a>	
				<a type="button" href="/notImplemented" className="item grow span-3"><h1 className="pa4">Loyalty Schemes & Deals</h1></a>
				<a type="button" href="/notImplemented" className="item grow span-3"><h1 >Customer Support</h1></a>
				<a type="button" href="adminDB" className="item grow span-3"><h1>Admin Database</h1></a>
				<a type="button" href="/customerDB" className="item grow span-3"><h1>Customer Database</h1></a>
				<a type="button" href="/notImplemented" className="item grow span-3"><h1 >Create Account</h1></a>
				<a type="button" href="/restDetails" className="item grow span-3"><h1 >Restaurant Details</h1></a>

			</div>
		 	   
		</div>
	);
}
	

export default Card;

