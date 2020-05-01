import React , { useState, useEffect } from 'react';
import './AdminMenu.css';
// import EdiText from 'react-editext'

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
			Description: "Chef Special",
			PortionSize: 100,
			PrepTime: 20
		},
		{
			ID: 3,
			Name: "Chicken Fajita",
			Category: "Pizza",
			Price: 100,
			Description: "Yummyyyyy",
			PortionSize: 100,
			PrepTime: 20
		},

	]
	return(
		<div>
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
								<th/>
								<th style = {{color: ""}} scope="col">ID</th>
								<th style = {{color: "3C3C3C"}} scope="col">Name</th>
								<th style = {{color: "3C3C3C"}} scope="col">Category</th>
								<th style = {{color: "3C3C3C"}} scope="col">Price</th>
								<th style = {{color: "3C3C3C"}} scope="col">Description</th>
								<th style = {{color: "3C3C3C"}} scope="col">Portion Size</th>
								<th style = {{color: "3C3C3C"}} scope="col">Prep Time</th>
								<th style = {{color: "3C3C3C"}} scope="col">Picture</th>
								

								</tr>
							</thead>
							<tbody>
								{
									data.map(
										(x, i) => {
											return (
												<tr key = {x.ID}>
													<td><input type="checkbox" class="form-check-input"/></td>
													<td style = {{color: "3C3C3C"}}>{data[i].ID}</td>
													<td style = {{color: "3C3C3C"}}>{data[i].Name}</td>
													<td style = {{color: "3C3C3C"}}>{data[i].Category}</td>
													<td style = {{color: "3C3C3C"}}>{data[i].Price}</td>
													<td style = {{color: "3C3C3C"}}>{data[i].Description}</td>
													<td style = {{color: "3C3C3C"}}>{data[i].PortionSize}</td>
													<td style = {{color: "#576271"}}>{data[i].PrepTime}</td>
													{/* <td style = {{color: "#576271"}}><textarea ref="newText" defaultValue="Edit me"/></td> */}
													<td><button type="button" class="btn btn-primary btn-sm imagebutton">Upload Image</button></td>
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