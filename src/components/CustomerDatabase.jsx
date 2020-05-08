import React , { useState, useEffect } from 'react';
import ReactBootstrap, {Table} from 'react-bootstrap';
import firebase_integration from '../Fire.js'

function CustomerDatabase() {

	const [myData,setData] = useState([]);

	try{
	useEffect(()=>{
 		//Retireves all Order History
		firebase_integration.database.collection("CustomerDatabase").onSnapshot((snapshot) => {
            var order_arr = []
            snapshot.docs.forEach(doc => {
                order_arr.push(doc.data())
            });
			setData(order_arr)
        })
	},myData);
	}
	catch(error) {
		alert("An error occured. Please try again!");
	};
	
	const renderTable = () => {
	    return myData.map(user => {
	      return (
	        <tr>
			  <td>{user.CustomerID}</td>
	          <td>{user.Name}</td>
	          <td>{user.Email}</td>
			  <td>{user.DOB.toDate().getDate()+"-"+(parseInt(user.DOB.toDate().getMonth())+1)+"-"+user.DOB.toDate().getFullYear()}</td>
	          <td>{user.Gender}</td>
	          <td>{user.ContactNo}</td>
	        </tr>
	      )
	    })
	  }

	return(

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

