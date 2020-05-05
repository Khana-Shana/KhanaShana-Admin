import React from 'react';
import AdminDBTable from "./AdminDBTable"
import './AdminDB.css';
import firebase_integration from '../Fire.js';

function AdminDB(){
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
					<img id="aunty" src = "https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/AdminDatabase%2FGroup%2011831.svg?alt=media&token=7ae930c8-05ec-4c8a-983a-5fa4916c859b"/>
				</div>
			</div>
		</div>
	);

}

export default AdminDB;