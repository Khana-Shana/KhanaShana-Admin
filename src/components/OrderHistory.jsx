import React , { useState, useEffect } from 'react';
import ReactBootstrap, {Table} from 'react-bootstrap';
import firebase_integration from '../Fire.js'

function OrderHistory() {

	const [myData,setData] = useState([]);

	useEffect(()=>{
 		//Retireves all Order History
		firebase_integration.database.collection("RegularOrder").orderBy("Date", "desc").onSnapshot((snapshot) => {
            var order_arr = []
            snapshot.docs.forEach(doc => {
				if(doc.data().Action === "Accept" || doc.data().Action === "Reject" || doc.data().Action === "Cancelled"){
					order_arr.push(doc.data())
				}
            });
			setData(order_arr)
			console.log(order_arr)
        })
	},myData);
	
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
	          <td>{user.Action}</td>
	        </tr>
	      )
	    })
	  }

	return(
			//React table code picked from https://react-bootstrap.github.io/components/table/
			<Table responsive>
				<thead>
			    	<tr className="bg-light-silver">
			    		<th>DATE</th>
				    	<th>ORDER ID</th>
				    	<th>CUST_ID</th>
				    	<th>ADDRESS</th>
				    	<th>DELIVERY ITEMS</th> 	
				    	<th>QTY</th>
				    	<th>TOTAL(PKR)</th>
				    	<th>ORDER TYPE</th>
				    	<th>ACTION</th>
			    	</tr>
			  	</thead>
			 	<tbody>{renderTable()}</tbody>
			</Table>	
		);
}

export default OrderHistory;

