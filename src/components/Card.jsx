import React from 'react';
import "./Card.css";	
	

const Card = () => {
	return (
		<div>
			
			<div className="grid-layout mt5"> {/* grid-layout css taken from https://stackoverflow.com/questions/8470070/how-to-create-grid-tile-view*/}
				
				<a type="button" href="/order" className="item grow span-3"><h1 className="mera">Order Management</h1></a>				
				<a type="button" href="/notImplemented" className="item grow span-3" ><h1 className="mera">Inventory Management</h1></a>
				<a type="button" href="/notImplemented" className="item grow span-3"><h1 className="mera">Finances</h1></a>
				<a type="button" href="/notImplemented" className="item grow span-3"><h1 className="mera">Menu</h1></a>
				<a type="button" href="/notImplemented" className="item grow span-3"><h1 className="mera">Customer Database</h1></a>
				<a type="button" href="/notImplemented" className="item grow span-3"><h1 className="mera">Loyalty Scheme</h1></a>
				<a type="button" href="/notImplemented" className="item grow span-3"><h1 className="mera">Customer Support</h1></a>
				<a type="button" href="/restDetails" className="item grow span-3"><h1 className="mera">Restaurant Details</h1></a>

			</div>
		 	   
		</div>
	);
}
	

export default Card;

