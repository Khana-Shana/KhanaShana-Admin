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
			firebase_integration.database.collection("RegularOrder").where("Tracking", "in", ['Pending', 'None', 'Cancelled', 'Preparing']).onSnapshot((snapshot) => {
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
		
		const returnAction=(user)=>{
			if (user.Action === "Accept/Reject"){
				return(
					<td><span className="bg-green pointer grow ba bw1 ma1">Accept</span><span className="bg-red pointer grow ba bw1">Reject</span></td>
			
				);
			}
			else if (user.Action==="Accept"){
				return (
					<td><span className="bg-green">Accepted</span></td>
				);
			}
			else{
				return(
					<td><span className="bg-red">Rejected</span></td>
				);
			}
		}

		const returnPrepare=(user)=>{

			if (user.Tracking === "Cancelled"){
				return(
					<td><span className="bg-yellow">Cancelled</span></td>
				);
			}
			if (user.Action === "Accept/Reject"){
				return(
					<td><p>Waiting for Action</p></td>
				);
			}
			else if(user.Action === "Accept" && user.Tracking === "Pending"){
				return(
					<td><span className="bg-gray pointer grow ba bw1 ma1">Prepare</span><span className="bg-light-silver pointer grow ba bw1">Done</span></td>
				);
			}
			else if(user.Tracking === "Preparing"){
				return(
					<td><span className="bg-gray 6rem">Preparing</span><span className="bg-light-silver pointer grow ba bw1">Done</span></td>
	     		);
			}
			else return(
				<td><span>-</span></td>
			);
		}


		const renderTable = () => {
	    return myData.map(user => {
	      return (
	        <tr>
	          <td>{user.Date.toDate().getDate()+"-"+(user.Date.toDate().getMonth()+1)+"-"+user.Date.toDate().getFullYear()}</td>
	          <td>{user.OrderID}</td>
	          <td>{user.CustomerID}</td>
	          <td>{user.Address}</td>
	          <td>{user.DishName.toString()}</td>
	          <td>{user.DishQuantity.toString()}</td>
	          <td>{user.Subtotal}</td>
	          <td>{user.OrderType}</td>
	          {returnAction(user)}
	          {returnPrepare(user)}
	        </tr>
	      )
	    })
	  }
		
		return(
			<div>
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
				
						{renderTable()}
				  	
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