import React , { useState, useEffect } from 'react';
import './AdminMenu.css';
// import EdiText from 'react-editext'
import firebase_integration from '../Fire.js'

function AdminMenu(){
	const [menu, setmenu] = useState([])

	useEffect(() => {
		firebase_integration.database.collection('Menu').onSnapshot((snapshot) => {
			var menu_items = []
					snapshot.docs.forEach(doc => {
					menu_items.push(doc.data())
				});
					setmenu(menu_items)
				})
	}, menu)

	// uploadImage()
	//updateDatabase()

	return(
		<div>
			{console.log(menu)}
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
									menu.map(
										(x, i) => {
											return (
												<tr key = {x.ID}>
													<td><input type="checkbox" class="form-check-input"/></td>
													<td style = {{color: "3C3C3C"}}>{menu[i].DishID}</td>
													<td style = {{color: "3C3C3C"}}>{menu[i].Name}</td>
													<td style = {{color: "3C3C3C"}}>{menu[i].Category}</td>
													<td style = {{color: "3C3C3C"}}>{menu[i].SalePrice}</td>
													<td style = {{color: "3C3C3C"}}>{menu[i].Description}</td>
													<td style = {{color: "3C3C3C"}}>{menu[i].PortionSize}</td>
													<td style = {{color: "#576271"}}>{menu[i].PrepTime}</td>
													{/* <td style = {{color: "#576271"}}><textarea ref="newText" defaultValue="Edit me"/></td> */}
													<td><button type="button" class="btn btn-primary btn-sm imagebutton">Upload Image<input type="file"/></button></td>
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