import React from 'react';
import AdminDBTable from "./AdminDBTable"
import './AdminDB.css';
import firebase_integration from '../Fire.js';

function AdminDB(){


	firebase_integration.getImageURL("aunty","AdminDatabase","","Group 11831.svg") //Retrieves image to be displayed

	return(
		//CSS taken from https://www.youtube.com/watch?v=bh3UAetYkUI
		<div className="row no-gutters">
			<div className="col-md-6 no-gutters">
				<div className="leftside d-flex justify-content-center align-items center">
					<AdminDBTable/> 
				</div>
			</div>

			<div className="col-md-6 no-gutters">
				<div className="rightside d-flex justify-content-center align-items center">
					<img id="aunty"/>
				</div>
			</div>
		</div>
	);

}

export default AdminDB;