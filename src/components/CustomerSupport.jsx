import React , { useState, useEffect } from 'react';
import ReactBootstrap, {InputGroup,Form,FormControl,Nav, Button, Navbar,NavDropdown,Table} from 'react-bootstrap';
import pic from './2479554.png';
import './CustomerSupport.css'
import firebase_integration from '../Fire.js';

function CustomerSupport(){
	const [myData,setData] = useState([]);

	useEffect(()=>{
		firebase_integration.database.collection('CustomerSupport').onSnapshot((snapshot) => {
			var order_arr = []
			snapshot.docs.forEach(doc => {
				order_arr.push(doc.data())
			});
			setData(order_arr)
			console.log(order_arr)
		})
	}, myData);

	const renderTable = () => {
	    return myData.map(feedback => {
	      return (
	        <tr>
	          <td>{feedback.CustomerID}</td>
			  <td>{feedback.Date.toDate().getDate()+"-"+(feedback.Date.toDate().getMonth()+1)+"-"+feedback.Date.toDate().getFullYear()}</td>
	          <td>{feedback.Rating}</td>
	          <td>{feedback.Subject}</td>
	          <td>{feedback.Message}</td>
	        </tr>
	      )
	    })
	  }

	return(
		<div>
			<div>
				<img className="text-example" src={pic}/>
			</div>
			<Table responsive>
			<thead>
				<tr className="bg-light-silver">
					<th>CUSTOMER ID</th>
					<th>DATE</th>
					<th>RATING</th>
					<th>SUBJECT</th>
					<th>MESSAGE</th> 	
				</tr>
			</thead>
			<tbody>{renderTable()}</tbody>
			</Table>	
		</div>
	);

}

export default CustomerSupport;