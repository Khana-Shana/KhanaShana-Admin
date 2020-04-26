import React , { Component } from 'react';
import {Link} from "react-router-dom";
import ReactBootstrap, {Nav, Button, Navbar,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';


class Header extends Component{
	render(){
		return(
			<div>
				<Navbar className="nav-link" expand="lg">			
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">  {/* for the left side of navbar*/}
				     <a href="#card"><img id="im" src={ require('./images.png') } /></a>
				      <Nav.Link href="#db" className="box" >Admin Database</Nav.Link>
				      <Nav.Link href="#acc" className="box">Create Account</Nav.Link>
				     </Nav>
				     <Nav className="ml-auto">  {/* for the right side of navbar*/}
				      <NavDropdown id="basic-nav-dropdown" id ="dw">
				        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
				      </NavDropdown>
				      <h3>Uzma</h3>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
			</div>

    	);
			
	}
}

export default Header;

