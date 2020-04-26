import React from 'react';
import "./Card.css";
// import 'tachyons'; 	
	

const Card = () => {
	return (
		<div>
			<br></br><br></br><br></br>
			
			<div className="grid-layout"> {/*taken from https://stackoverflow.com/questions/8470070/how-to-create-grid-tile-view*/}
				<a type="button" href="/order" className="item grow span-3"><h1 className="mera">Order Management</h1></a>				
				<a type="button" href="/orderq" className="item grow span-3" ><h1 className="mera">Inventory Management</h1></a>
				<a type="button" href="/orderq" className="item grow span-3"><h1 className="mera">Finances</h1></a>
				<a type="button" href="/orderq" className="item grow span-3"><h1 className="mera">Menu</h1></a>
				<a type="button" href="/orderq" className="item grow span-3"><h1 className="mera">Customer Database</h1></a>
				<a type="button" href="/orderq" className="item grow span-3"><h1 className="mera">Loyalty Scheme</h1></a>
				<a type="button" href="/orderq" className="item grow span-3"><h1 className="mera">Customer Support</h1></a>
				<a type="button" href="/restDetails" className="item grow span-3"><h1 className="mera">Restaurant Details</h1></a>




		{/*ISKE NEECHE BULLSHIT*/}

			</div>
		 	   
		</div>
	);
}
	

export default Card;



// </div>
// 					<div className="grid-layout">    
// 				    <div className="item span-3 grow" style={{backgroundColor:"#626E60"}}><h1 className="mera">Order Management</h1></div>
// 				    <div className="item span-3 grow" style={{backgroundColor:"#626E60"}}><h1 className="mera">Inventory Management</h1></div>
// 					<div className="item span-3 grow" style={{backgroundColor:"#626E60"}}><h1 className="mera">Finances</h1></div>
// 				    <div className="item span-3 grow" style={{backgroundColor:"#626E60"}}><h1 className="mera">Menu</h1></div>
// 				    <div className="item span-3 grow" style={{backgroundColor:"#626E60"}}><h1 className="mera">Customer Database</h1></div>
// 				    <div className="item span-3 grow" style={{backgroundColor:"#626E60"}}><h1 className="mera">Loyalty Scheme</h1></div>
// 					<div className="item span-3 grow" style={{backgroundColor:"#626E60"}}><h1 className="mera">Customer Support</h1></div>
// 				    <div className="item span-3 grow" style={{backgroundColor:"#626E60"}}><h1 className="mera">Restaurant Details</h1></div>
// 			</div>

