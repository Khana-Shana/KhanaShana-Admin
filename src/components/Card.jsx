import React from 'react';
import "./Card.css";	
import {Link} from "react-router-dom";
	
import firebase_integration from '../Fire.js'

const Card = () => {

	// DO NOT REMOVE

	// const [userdata, setdata] = React.useState({})

	// React.useEffect(()=>{
	// 	var custID = firebase_integration.auth.currentUser.uid
	// 	firebase_integration.collection("AdminDatabase").doc(custID.toString).onSnapshot((snapshot) => {
	// 		setdata(snapshot.data())
	// 	})
	// }, userdata)

	// return userdata.Root === true ? (

		// <div>
			
		// 	<div className="grid-layout mt5"> {/* grid-layout css taken from https://stackoverflow.com/questions/8470070/how-to-create-grid-tile-view*/}
				
		// 		<a type="button" href="/order" className="item grow span-3"><h1 className="mera">Order Management</h1></a>				
		// 		<a type="button" href="/adminMenu" className="item grow span-3 pa3" ><h1>Menu</h1></a>	
		// 		<a type="button" href="/deals" className="item grow span-3"><h1 className="pa4.5">Deals & Discounts</h1></a>
		// 		<a type="button" href="/customerSupport" className="item grow span-3"><h1 >Customer Support</h1></a>
		// 		<a type="button" href="/adminDB" className="item grow span-3"><h1>Admin Database</h1></a>
		// 		<a type="button" href="/customerDB" className="item grow span-3"><h1>Customer Database</h1></a>
		// 		<a type="button" href="/createAccount" className="item grow span-3"><h1 >Create Account</h1></a>
		// 		<a type="button" href="/restDetails" className="item grow span-3"><h1 >Restaurant Details</h1></a>

		// 	</div>
		// </div>

	// )
	// :
	// <div>
			
	// 		<div className="grid-layout mt5"> {/* grid-layout css taken from https://stackoverflow.com/questions/8470070/how-to-create-grid-tile-view*/}
				
	// 			<a type="button" href="/order" className="item grow span-3"><h1 className="mera">Order Management</h1></a>				
	// 			<a type="button" href="/adminMenu" className="item grow span-3 pa3" ><h1>Menu</h1></a>	
	// 			<a type="button" href="/deals" className="item grow span-3"><h1 className="pa4.5">Deals & Discounts</h1></a>
	// 			<a type="button" href="/customerSupport" className="item grow span-3"><h1 >Customer Support</h1></a>
	// 			<a type="button" href="/adminDB" className="item grow span-3"><h1>Admin Database</h1></a>
	// 			<a type="button" href="/customerDB" className="item grow span-3"><h1>Customer Database</h1></a>
	// 			<a type="button" href="/NotImplemented" className="item grow span-3" onClick={()=>alert("Accounts can only be created by users with root privelege")}><h1 >Create Account</h1></a>
	// 			<a type="button" href="/restDetails" className="item grow span-3"><h1 >Restaurant Details</h1></a>

	// 		</div>
	// 	</div>

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
				<Link to="/restDetails" type="button" className="item grow span-3"><h1 >Restaurant Details</h1></Link>

			</div>
		</div>
	)


}
	

export default Card;

