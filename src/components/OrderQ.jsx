import React , { useState, useEffect } from 'react';
import './OrderMng.css';
import ReactBootstrap, {Table} from 'react-bootstrap';
import firebase_integration from '../Fire.js'

function OrderQ() {

		const [myData,setData] = useState([]);
		// const [myArr,setArr] = useState([]);
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


		const temp = (user) => {
			firebase_integration.updateOrderQueueAction(user.OrderID,"Reject")
			firebase_integration.updateOrderQueueTracking(user.OrderID,"None")
		}

		
		const returnAction=(user)=>{
			if (user.Action === "Accept/Reject"){
				return(
					<td><span onClick={()=>firebase_integration.updateOrderQueueAction(user.OrderID,"Accept")} className="bg-green pointer dim ph2 ba bw1 ma1">Accept</span>
					<span onClick={()=>temp(user)} className="bg-red pointer ph2 dim ba bw1">Reject</span></td>
			
				);
			}
			else if (user.Action==="Accept"){
				return (
					<td><span className="bg-green b">Accepted</span></td>
				);
			}
			else if (user.Action === "Cancelled"){
				return(
					<td><span>-</span></td>
				);
			}
			else{
				return(
					<td><span className="bg-red b">Rejected</span></td>
				);
			}
		}

		const returnPrepare=(user)=>{

			if (user.Tracking === "Cancelled"){
				firebase_integration.updateOrderQueueAction(user.OrderID,"Cancelled")
				return(
					
					<td><span className="bg-yellow">Cancelled</span></td>
				);
			}
			if (user.Action === "Accept/Reject"){
				return(
					<td><p className="b">Waiting for Action</p></td>
				);
			}
			else if(user.Action === "Accept" && user.Tracking === "Pending"){
				return(
					<td><span onClick={()=>firebase_integration.updateOrderQueueTracking(user.OrderID,"Preparing")} className="bg-gray pointer ph2 dim ba bw1 ma1">Prepare</span>
					</td>
				);
			}

			else if(user.Action === "Accept" && user.Tracking === "Preparing"){
				return(

					<td>
					<span className="orange i mr2 f4">Preparing</span>
					<span onClick={()=>firebase_integration.updateOrderQueueTracking(user.OrderID,"Done")} className="bg-light-silver pointer dim ph2 ba bw1">Done</span>
					</td>
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