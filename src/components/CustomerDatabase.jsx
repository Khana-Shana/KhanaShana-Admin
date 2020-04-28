import React , { useState, useEffect } from 'react';
import ReactBootstrap, {Table} from 'react-bootstrap';
import firebase_integration from '../Fire.js'

function CustomerDatabase() {

	const [myData,setData] = useState([]);

	useEffect(()=>{
 		//Retireves all Order History
		firebase_integration.database.collection("RegularOrder").where("Action", "in", ["Accept", "Reject","Cancelled"]).onSnapshot((snapshot) => {
            var order_arr = []
            snapshot.docs.forEach(doc => {
                order_arr.push(doc.data())
            });
			setData(order_arr)
			console.log(order_arr)
        })
	},myData);
	
	const renderTable = () => {
	    return myData.map(user => {
	      return (
	        <tr>
			  <td>{user.CustomerID}</td>
	          <td>{user.Name}</td>
	          <td>{user.Email_ID}</td>
			  <td>{user.DOB}</td>
	          <td>{user.Gender}</td>
	          <td>{user.Contact}</td>
	        </tr>
	      )
	    })
	  }

	return(
			//React table code picked from https://react-bootstrap.github.io/components/table/
			<Table responsive className="mt4">
				<thead>
			    	<tr className="bg-light-silver">
			    		<th>CUSTOMER_ID</th>
				    	<th>NAME</th>
				    	<th>EMAIL_ID</th>
				    	<th>D.O.B</th>
				    	<th>GENDER</th> 	
				    	<th>CONTACT</th>
			    	</tr>
			  	</thead>
			 	<tbody>{renderTable()}</tbody>
			</Table>	
		);
}

export default CustomerDatabase;

