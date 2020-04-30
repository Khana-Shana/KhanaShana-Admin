import React , { useState, useEffect } from 'react';
import './AdminMenu.css';

function AdminMenu(){
	const [menu, setmenu] = useState([])
	var data = [
		{
			ID: 1,
			Name: "Sandwich",
			Category: "Desi",
			Price: 100,
			Description: "Very Delicious Food",
			PotionSize: 100,
			PrepTime: 20
		}

	]
	return(
		<div id>
			<div id="menubox" className="container">
				<table id="items" className="table">
					<thead>
						<tr>
						<th style = {{color: "#576271"}} scope="col">ID</th>
						<th style = {{color: "#576271"}} scope="col">Name</th>
						<th style = {{color: "#576271"}} scope="col">Category</th>
						<th style = {{color: "#576271"}} scope="col">Price</th>
						<th style = {{color: "#576271"}} scope="col">Description</th>
						<th style = {{color: "#576271"}} scope="col">Portion Size</th>
						<th style = {{color: "#576271"}} scope="col">Prep Time</th>
						<th style = {{color: "#576271"}} scope="col">Picture</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	);
}

export default AdminMenu;