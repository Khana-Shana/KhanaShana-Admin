import React , { useState, useEffect } from 'react';
import ReactBootstrap, {Table} from 'react-bootstrap';
import firebase_integration from '../Fire.js'

function CompletedOrders() {

	const [myData,setData] = useState([]);
	try{
	useEffect(()=>{
		//Retrieves only Accepted/Completed orders from the Database
		var todaysDate = new Date().setHours(0,0,0,0)
		firebase_integration.database.collection("RegularOrder").orderBy("Date", "desc").onSnapshot((snapshot) => {
			var order_arr = []
            snapshot.docs.forEach(doc => {
				var incomingDate = new Date(doc.data().Date.seconds*1000).setHours(0,0,0,0)
				if(doc.data().Tracking === "Done"){
					if(incomingDate === todaysDate){
						order_arr.push(doc.data())
					}
				}
			});
			setData(order_arr)
        })
	},myData);
	}
	catch(error) {
		alert("An error occured. Please try again!");
	};
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
	        </tr>
	      )
	    })
	  }
	return(
			//React table code picked from https://react-bootstrap.github.io/components/table/
			<div style={{padding:"5px"}}>
			<Table responsive  >
				<thead>
			    	<tr className="bg-light-silver">
						<th>DATE</th>
					
						<th>PHONE N.O</th> 
						<th>ADDRESS</th>
						<th>DELIVERY ITEMS</th> 
						<th>QTY</th>	
						<th>TOTAL(PKR)</th>
						<th>ORDER TYPE</th>
			    	</tr>
			  	</thead>
				<tbody>{renderTable()}</tbody>
			</Table>
				</div>
		);

}


export default CompletedOrders;