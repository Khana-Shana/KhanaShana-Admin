import React , { useState, useEffect } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import ReactBootstrap, {InputGroup,FormControl,Nav, Button, Navbar,NavDropdown,Table} from 'react-bootstrap';




function OrderMngTable(props) {

	

	const [title,setTitle] = useState("Accept");
	// const {data,isPrepared} = props
	const {date,order_id,cust_id,address,delivery_items,qty,total,order_type} = props.data;
	
	// const isAccepted=()=>{
	// 	return true if ({title}=="Accept");
	// }

	// https://stackoverflow.com/questions/56896037/using-react-hooks-axios-to-fetch-props-and-display-in-a-table		

	 
	 return(
	 		<>
		          <td>{date}</td>
		          <td>{order_id}</td>
		          <td>{cust_id}</td>
		          <td>{address}</td>
		          <td>{delivery_items}</td>
		          <td>{qty}</td>
		          <td>{total}</td>
		          <td>{order_type}</td>
		          <td>
					<span className="bg-green" onClick={()=>setTitle("ACCEPTED")}>{title}</span><span className="bg-red">Reject</span></td>
				  <td><span className="bg-gray">Preparing</span><span onClick={()=>props.prepared(order_id)} className="bg-light-silver">Done</span></td>
	        </>
// https://react-bootstrap.github.io/components/table/
      	);
}

// class OrderMngTable extends Component{
// 	render(){
// 	}
// }

export default OrderMngTable

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