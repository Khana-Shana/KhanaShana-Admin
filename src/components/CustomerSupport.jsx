import React , { useState, useEffect } from 'react';
import ReactBootstrap, {InputGroup,Form,FormControl,Nav, Button, Navbar,NavDropdown,Table} from 'react-bootstrap';
import pic from './2479554.png';
import './CustomerSupport.css'
import firebase_integration from '../Fire.js';

function CustomerSupport(){
	return(
		<div>
			<img className="text-example" src={pic}/>
			
		</div>
	);

}

export default CustomerSupport;