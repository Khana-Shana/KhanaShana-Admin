import React , { useState, useEffect } from 'react';
import './AdminMenu.css';

function AdminMenu(){
	const [menu, setmenu] = useState([])
	var data = [
		{
			ID: 1,
			Name: "Handi",
			Category: "Desi",
			Price: 100,
			Description: "Very Delicious Food",
			PortionSize: 100,
			PrepTime: 20
		},
		{
			ID: 2,
			Name: "Kebab",
			Category: "Desi",
			Price: 100,
			Description: "Very Delicious Food",
			PortionSize: 100,
			PrepTime: 20
		},
		{
			ID: 3,
			Name: "Chicken Fajita",
			Category: "Pizza",
			Price: 100,
			Description: "Very Delicious Food",
			PortionSize: 100,
			PrepTime: 20
		},

	]
	return(
		<div id>
			<div id="menubox" className="container">
				<div className="row">
					<button type="button" class="btn btn-primary btn-sm menubutton">Add</button>
					<button type="button" class="btn btn-primary btn-sm menubutton">Edit</button>
					<button type="button" class="btn btn-primary btn-sm menubutton">Remove</button>
				</div>
				<div className="row">
					<div class="table-responsive">
						<table id="items" className="table table-hover">
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
							<tbody>
								{
									data.map(
										(x, i) => {
											return (
												<tr key = {x.ID}>
													<td style = {{color: "#576271"}}>{data[i].ID}</td>
													<td style = {{color: "#576271"}}>{data[i].Name}</td>
													<td style = {{color: "#576271"}}>{data[i].Category}</td>
													<td style = {{color: "#576271"}}>{data[i].Price}</td>
													<td style = {{color: "#576271"}}>{data[i].Description}</td>
													<td style = {{color: "#576271"}}>{data[i].PortionSize}</td>
													<td style = {{color: "#576271"}}>{data[i].PrepTime}</td>
												</tr>
											);
										}
									)
								}
								</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminMenu;