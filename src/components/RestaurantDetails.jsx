import React , { useState, useEffect } from 'react';
import ReactBootstrap, {InputGroup,Form,FormControl,Nav, Button, Navbar,NavDropdown,Table} from 'react-bootstrap';
import firebase_integration from '../Fire.js';


function RestaurantDetails(){

	firebase_integration.getImageURL("RestaurantDetails","RestaurantDetails","","RestaurantDetails.svg")

	return(
		<div>
			<h2 className="tc pa2 ma2">Restaurant Details</h2>
			<div className="row no-gutters">
				<div className="col-md-6 no-gutters">
					<div className="leftside d-flex justify-content-center align-items center">
						<Form>
							<Form.Group controlId="formBasicName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="name" placeholder="Enter Name" />
							</Form.Group>
						  <Form.Group controlId="formBasicEmail">
						    <Form.Label>Email address</Form.Label>
						    <Form.Control type="email" placeholder="Enter email" />
						    <Form.Text className="text-muted">
						      We'll never share your email with anyone else.
						    </Form.Text>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>Password</Form.Label>
						    <Form.Control type="password" placeholder="Password" />
						  </Form.Group>
						  <Form.Group controlId="formBasicCheckbox">
						    <Form.Check type="checkbox" label="Check me out" />
						  </Form.Group>
						  <Button variant="primary" type="submit">
						    Submit
						  </Button>
						</Form>
					</div>

				</div>

				<div className="col-md-3 no-gutters tr">
					<div className="rightside d-flex justify-content-center align-items center">

						<img id="RestaurantDetails" className="tr ml5" />
					</div>
				</div>
			
			</div>
			
		</div>
	);	

}

export default RestaurantDetails;