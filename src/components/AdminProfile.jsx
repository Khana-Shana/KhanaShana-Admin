import React from 'react';
import ReactBootstrap, {Table,Form,Button} from 'react-bootstrap';
import "./AdminProfile.css";	
import firebase_integration from '../Fire.js';

function AdminProfile(){
	return(
	<div>
		 <div className ="col-2 d-flex justify-content-center">
                    <img id="profilepic" className = "img-fluid" alt="ProfilePicture" src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/CustomerProfile%2Fprofilepic.svg?alt=media&token=ee543aa0-18be-4d30-a73c-1c53d838ac7c"/>
                </div>
                <div id="r1c2" className ="col-3" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                    
			</div>

			
	</div>
	);

}

export default AdminProfile;