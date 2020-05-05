import React , { useState, useEffect } from 'react';
import pic from './Rectangle 1102.svg';
import pic2 from './Group 10590.svg';
import pic3 from './GET ON BOARD.svg';
import './AdminCreateAccount.css'

function AdminCreateAccount(){
	return(
			<div className = "container">
				<div className="row">
					<div className="col">
						<img className="tc" src={pic3}/>
						
					</div>
				</div>
				<div className="row">
					<div className="col">
						<img className="tc" src={pic}/>
					</div>
				</div>
			</div>
		);

}

export default AdminCreateAccount;