import React from 'react';
import ReactBootstrap, {Nav, Navbar,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';



function Header(){

	return(
		
		<div>
			<Navbar className="nav-link" expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			  	<Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">  {/*left side of navbar*/}
			    	<a href="/">
				      	<svg className="bi bi-house-door-fill mt2 mr2 white grow" width="2.5em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						  <path d="M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
						  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
						</svg>
					</a>
			    	<Nav.Link href="/newAcc" className="box grow" style={{backgroundColor:"#3C3C3C",color:"white"}}>Create Account</Nav.Link>
			     </Nav>
			     
			    <Nav className="ml-auto">  {/* for the right side of navbar*/}
			    	<svg className="bi bi-person-fill" width="2em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
					</svg>	
			    	<NavDropdown className="mt2 grow" id="basic-nav-dropdown" id ="dw">
			   	    	<NavDropdown.Item href="/adminProfile">Profile</NavDropdown.Item>
			        	<NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
			      	</NavDropdown>
					<h3 className="mt1">Uzma</h3>
			    </Nav>
			    
			 	</Navbar.Collapse>
			</Navbar>
		</div>

    	);
			
	}


export default Header;

