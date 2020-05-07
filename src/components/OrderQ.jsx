import React , { useState, useEffect } from 'react';
import ReactBootstrap, {Table} from 'react-bootstrap';
import firebase_integration from '../Fire.js'

function OrderQ() {

		const [myData,setData] = useState([]);

		useEffect(()=>{
			var todaysDate = new Date().setHours(0,0,0,0)
			firebase_integration.database.collection("RegularOrder").orderBy("Date", "desc").onSnapshot((snapshot) => {
				var order_arr = []
				snapshot.docs.forEach(doc => {
				var incomingDate = new Date(doc.data().Date.seconds*1000).setHours(0,0,0,0)
				if(doc.data().Tracking === "Pending" || doc.data().Tracking === "Rejected" || doc.data().Tracking === "Cancelled" || doc.data().Tracking === "Preparing"){
					if(incomingDate === todaysDate){
						order_arr.push(doc.data())
					}
				}
			});
				setData(order_arr)
			})
		},myData);

		const rejectingOrder = (user) => {
			{/*Changes the Action and Tracking fields in Firebase*/}
			firebase_integration.updateOrderQueueAction(user.OrderID,"Reject")
			firebase_integration.updateOrderQueueTracking(user.OrderID,"Rejected")
		}

		const returnAction=(user)=>{
			{/*Conditionally renders the Action column of the Table*/}
			
			if (user.Action === "Accept/Reject"){
				return(
					<td><span onClick={()=>firebase_integration.updateOrderQueueAction(user.OrderID,"Accept")} style={{borderRadius:"10%"}} className="bg-green pointer dim pa2 ph2 ba bw2 ma1 b">Accept</span>
					<span onClick={()=>rejectingOrder(user)} style={{borderRadius:"10%"}} className="bg-red pointer pa2 ph2 dim ba bw2 b">Reject</span></td>
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

		const returnTracking=(user)=>{
			{/*Conditionally renders the Order Tracking column of the Table*/}
			
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
			else if (user.Action === "Accept" && user.Tracking === "Pending"){
				return(
					<td><span onClick={()=>firebase_integration.updateOrderQueueTracking(user.OrderID,"Preparing")} className="bg-gray pointer ph2 pa2 dim ba bw2 ma1 b">Prepare</span>
					</td>
				);
			}
			else if (user.Action === "Accept" && user.Tracking === "Preparing"){
				return(
					<td>
						<span className="orange i mr2 f4">Preparing</span>
						<span onClick={()=>firebase_integration.updateOrderQueueTracking(user.OrderID,"Done")} className="bg-light-silver pointer dim ph2 pa2 ba bw2 b">Done</span>
					</td>
	     		);
			}
			else //Order has been Rejected
				return(
					<td><span>Rejected</span></td> 
			);
		}

		const returnItems = (user)=>{
			//Renders the column displaying Name of dishes ordered + their quantity			
			return user.DishName.map((_,i)=>{
				return(
				<div>
					{user.DishName[i].toString()}
					</div>
				);
			})
		}

		const returnQty = (user)=>{
			return user.DishName.map((_,i)=>{
				return(
				<div>
					{user.DishQuantity[i]}
				</div>
				);
			})
		}
		// +","+user.DishQuantity[i].toString()}
		const renderTable = () => {
		    return myData.map(user => {
		      return (
		        <tr>
		          <td>{user.Date.toDate().getDate()+"-"+(user.Date.toDate().getMonth()+1)+"-"+user.Date.toDate().getFullYear()}</td>
		          <td>{user.MobileNumber}</td>
		          <td>{user.Address}</td>
				  <td>{returnItems(user)}</td>
				  <td>{returnQty(user)}</td>
		          {/* <td>{user.DishName.toString()}</td>
		          <td>{user.DishQuantity.toString()}</td> */}
		          <td>{user.Subtotal}</td>
		          <td>{user.OrderType}</td>
		          {returnAction(user)}
		          {returnTracking(user)}
		        </tr>
		      )
		    })
		  }
	
	//returns the Table headings and calls the renderTable function to fill in the table body
		return(
			<div>
				<Table responsive>
				  <thead>
				    <tr className="bg-light-silver">
				      <th>DATE</th>
				      <th>PHONE N.O</th> 
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
		);
		
}


export default OrderQ;