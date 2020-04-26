import React , { useState, useEffect } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import ReactBootstrap, {InputGroup,FormControl,Nav, Button, Navbar,NavDropdown,Table} from 'react-bootstrap';


function CompletedOrders() {

	const [myData,setData] = useState([]);

	useEffect(()=>{
 
		fetch("dummy.json").then(function(resp){
			return resp.json();
		})
		.then(function(data){
			if(data != myData){
				setData(...myData,data)
			}
		})
		.catch(err => {
          // Do something for an error here
          console.log("Error Reading data " + err);
	})
	},[]);


	// https://stackoverflow.com/questions/56896037/using-react-hooks-axios-to-fetch-data-and-display-in-a-table		
	const renderTable = () => {
	    return myData.map(user => {
	      return (
	        <tr>
	          <td>{user.date}</td>
	          <td>{user.order_id}</td>
	          <td>{user.cust_id}</td>
	          <td>{user.address}</td>
	          <td>{user.delivery_items}</td>
	          <td>{user.qty}</td>
	          <td>{user.total}</td>
	          <td>{user.order_type}</td>
	        </tr>
	      )
	    })
	  }
	return(
			
// https://react-bootstrap.github.io/components/table/
			
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
			    </tr>
			  </thead>
			  <tbody>{renderTable()}</tbody>
			</Table>
			
        
      
    
				
		);

}

export default CompletedOrders;

