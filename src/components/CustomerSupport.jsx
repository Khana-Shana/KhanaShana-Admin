import React , { useState, useEffect } from 'react';
import CustomerSupportHelper from "./CustomerSupportHelper.jsx" 
import ReactBootstrap, {InputGroup,Form,FormControl,Nav, Button, Navbar,NavDropdown,Table} from 'react-bootstrap';
import pic from './2479554.png';
import './CustomerSupport.css'
import {FaStar} from 'react-icons/fa';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
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

	const printingStar =(n)=>{
		let arr=new Array(n).fill(0);
		return arr.map(x=>{
			return(
			 
					<FaStar 
                        class = "star" 
                        color="red"
                        // color="#ffc107" 
                        size = {20}/>
                       
	          );
			}
		)
	} 	
	

	const renderTable = () => {
	    return myData.map(feedback => {
	      return (
	        <tr>
	          <td>{feedback.CustomerID}</td>
			  <td>{feedback.Date.toDate().getDate()+"-"+(feedback.Date.toDate().getMonth()+1)+"-"+feedback.Date.toDate().getFullYear()}</td>
	          <td>{printingStar(feedback.Rating)}</td>
	          <td>{feedback.Subject}</td>
                        
	          {
	          	feedback.Message.length<50?
		          	<td>{feedback.Message}</td>
		          	
		          	:
		          	<td>{feedback.Message.slice(0,50) + "..."}
		          	<span className="bg-mid-gray pointer dim ph2 bw1 ml2 mb2 br3 tabbing"><Link to="/custSupportHelper">View Full Message</Link></span></td>
	          }
	      
	        </tr>
	      )
	    })
	  }

	return(
		<div>
			<div className="text-example">
				<img src={pic}/>
			</div>
			
			<div className="yo">
				<Table responsive>
				<thead>
					<tr className="bg-light-silver">
						<th>CUSTOMER ID</th>
						<th>DATE</th>
						<th>RATING</th>
						<th>SUBJECT</th>
						<th>MESSAGE</th> 	
						<th></th>
					</tr>
				</thead>
				<tbody>{renderTable()}</tbody>
				</Table>	
			</div>
		</div>
	);

}

export default CustomerSupport;