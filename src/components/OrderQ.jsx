import React , { useState, useEffect } from 'react';
import './OrderMng.css';
import OrderMngNav from './OrderMngNav.jsx';
import OrderMngTable from './OrderMngTable.jsx'
import CompletedOrders from './CompletedOrders.jsx'
import OrderHistory from './OrderHistory.jsx'
import ReactBootstrap, {Nav, Button, Navbar,NavDropdown,Table} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import firebase_integration from '../Fire.js'

function OrderQ() {

		const [myData,setData] = useState([]);
		const [myArr,setArr] = useState([]);
		useEffect(()=>{
			// var todaysdate = new Date()
			// ADD DATE FILTER
			firebase_integration.database.collection("RegularOrder").onSnapshot((snapshot) => {
				var order_arr = []
				snapshot.docs.forEach(doc => {
				order_arr.push(doc.data())
			});
				setData(order_arr)
			})
		},myData);


		const prepared = (idd) => {
			setData(myData.filter(user=>user.order_id!=idd))
		}
		
		
		
		return(
			<div className="tc">
				<Table responsive>
				  <thead>
				    <tr className="bg-light-silver tc ">
				      <th>DATE</th>
				      <th>ORDER ID</th>
				      <th>CUST_ID</th> 
				      <th>ADDRESS</th>
				      <th>DELIVERY ITEMS</th> 	
				      <th>QTY</th>
				      <th>TOTAL(PKR)</th>
				      <th>ORDER TYPE</th>
				      <th>ACTION</th>
				      <th>ORDER TRACKING</th>
				    </tr>
				  </thead>
				  <tbody>
					  {console.log("Doosra",myData)}
				  	{myData.map(user=> (
						  
				  		<tr className="tc">	
				  			<OrderMngTable data={user} prepared={prepared} />
				  		</tr>
				  	))}
				  </tbody>
				</Table>
			</div>
		)
		
}

// class OrderMng extends Component{
// 	render(){
// 	}
// }


export default OrderQ;