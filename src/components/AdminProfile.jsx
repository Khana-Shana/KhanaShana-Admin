import React from 'react';
import ReactBootstrap, {Table,Form,Button} from 'react-bootstrap';
import "./AdminProfile.css";	
import firebase_integration from '../Fire.js';

function AdminProfile(){
	return(
	<div>
		 <div className ="col-2 d-flex justify-content-center">
                    <img id="profilepic" className = "img-fluid" alt="ProfilePicture" />
                    {firebase_integration.getImageURL('profilepic', 'CustomerProfile', '','profilepic.svg')}

                </div>
                <div id="r1c2" className ="col-3" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                    
			</div>

			
	</div>
	);

}

export default AdminProfile;