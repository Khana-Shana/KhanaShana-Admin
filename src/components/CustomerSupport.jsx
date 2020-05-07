import React , { useState, useEffect } from 'react';
import ReactBootstrap, {InputGroup,Form,FormControl,Nav, Button, Navbar,NavDropdown,Table} from 'react-bootstrap';
import './CustomerSupport.css'
import {FaStar} from 'react-icons/fa';
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
		//takes as parameter the rating, and prints the respective number of stars
		let arr=new Array(n).fill(0);
		return arr.map(x=>{
			return(
					<FaStar 
                        class = "star" 
                        color="red"
                        size = {20}/>
	          );
			}
		)
	} 	
	
	const viewFullMessage = (msg)=>{
		alert(msg)
	}

	const renderTable = () => {
	    return myData.map(feedback => {
	      return (
	        <tr>
	        	<td>{feedback.CustomerID}</td>
				<td>{feedback.Date.toDate().getDate()+"-"+(feedback.Date.toDate().getMonth()+1)+"-"+feedback.Date.toDate().getFullYear()}</td>
	        	<td>{!Number.isNaN(feedback.Rating)?printingStar(feedback.Rating):<div></div>}</td>
	        	<td>{feedback.Subject}</td>
                        
	          {
	          	feedback.Message.length<50?
	          	//if length of message is below length of 50 chars, it will be displayed as it is
		          	<td>{feedback.Message}</td> 
		          	:
		        //otherwise show only a part of the message. On clicking the View Full Message button, the browser alerts with the full message
		        	<td>{feedback.Message.slice(0,50) + "..."} 
		        	<button onClick={()=>viewFullMessage(feedback.Message)} className="dim ml2 bg-mid-gray viewFullMessage">View Full Message</button></td>
		        
	          }
	      
	        </tr>
	      )
	    })
	}

	return(
		<div>
			<div className="imageOnTop">
				<img src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/CustomerSupport%2F2479554.png?alt=media&token=db373e75-558b-4f16-89bc-6eab99fab33a"/>
			</div>
			
			<div className="alignTable">
				<Table responsive>
				<thead>
					<tr className="bg-light-silver">
						<th className="tc">CUSTOMER ID</th>
						<th className="tc">DATE</th>
						<th className="tc">RATING</th>
						<th className="tc">SUBJECT</th>
						<th className="tc">MESSAGE</th> 	
				
					</tr>
				</thead>
				<tbody>{renderTable()}</tbody>
				</Table>	
			</div>
		</div>
	);

}

export default CustomerSupport;

// <div><td><span onClick={()=>viewFullMessage(feedback.Message)} className="bg-mid-gray pointer dim ph2 bw1 ml2 mb2 br3 tabbing">ViewMessage</span></td></div>
