import React , { useState, useEffect } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import ReactBootstrap, {InputGroup,FormControl,Nav, Button, Navbar,NavDropdown,Table} from 'react-bootstrap';
import firebase_integration from '../Fire.js'

function CompletedOrders() {

	const [myData,setData] = useState([]);

	useEffect(()=>{
 
		firebase_integration.database.collection("RegularOrder").where("Action", "==", "Accept").onSnapshot((snapshot) => {
            var order_arr = []
            snapshot.docs.forEach(doc => {
                order_arr.push(doc.data())
            });
			setData(order_arr)
			console.log(order_arr)
        })
	},myData);

	// https://stackoverflow.com/questions/56896037/using-react-hooks-axios-to-fetch-data-and-display-in-a-table		
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

// class CompletedOrders extends Component{
// 	render(){
// 	}
// }

export default CompletedOrders

// <Table responsive>
// 				  <thead>
// 				    <tr className="bg-light-silver">
// 				      <th>DATE</th>
// 				      <th>ORDER ID</th>
// 				      <th>CUST_ID</th>
// 				      <th>ADDRESS</th>
// 				      <th>DELIVERY ITEMS</th>
// 				      <th>QTY</th>
// 				      <th>TOTAL(PKR)</th>
// 				      <th>ORDER TYPE</th>
// 				      <th>ACTION</th>
// 				      <th>ORDER TRACKING</th>
// 				    </tr>
// 				  </thead>
// 				  <tbody>
// 				    <tr>
// 				      <td>1</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td><button  className="bg-green">Accept</button><button className="bg-red">Reject</button></td>
// 				      <td><button className="bg-gray">Preparing</button><button className="bg-light-silver">Done</button></td>
// 				    </tr>
// 				    <tr>
// 				      <td>2</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td><button className="bg-green">Accept</button><button className="bg-red">Reject</button></td>
// 				      <td><button className="bg-gray">Preparing</button><button className="bg-light-silver">Done</button></td>
// 				    </tr>
// 				    <tr>
// 				      <td>3</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td>Table cell</td>
// 				      <td><button className="bg-green">Accept</button><button className="bg-red">Reject</button></td>
// 				      <td><button className="bg-gray">Preparing</button><button className="bg-light-silver">Done</button></td>
// 				    </tr>
// 				  </tbody>
// 				</Table>