import React , { useState, useEffect } from 'react';
import './AdminMenu.css';
import firebase_integration from '../Fire.js'

function AdminMenu(){
	const [menu, setmenu] = useState([])
	const [edit, setedit] = useState([])
	const [editmode, seteditmode] = useState(false)
	useEffect(() => {
		firebase_integration.database.collection('Menu').onSnapshot((snapshot) => {
			var menu_items = []
			// var edit_status = []
					snapshot.docs.forEach(doc => {
					menu_items.push(doc.data())
					// edit_status.push(false)
				});
					setmenu(menu_items)
					// setedit(edit_status)
				})

	}, menu)
	function handling_editmode() {
		var editstates = [];
		[...menu.keys()].map((_,i) => {
			editstates.push(document.getElementsByClassName("form-check-input")[i].checked)
			// edit[i] === true
			// 	?editstates[i].push(true)
			// 	:editstates.push(document.getElementsByClassName("form-check-input")[i].checked)
		})
		setedit(editstates)
		seteditmode(true)
	}
	return(
		<div>
			<div id="menubox" className="container">
				<div className="row">
					<button type="button" class="btn btn-primary btn-sm menubutton">Add</button>
					<button id = "edit" type="button" class="btn btn-primary btn-sm menubutton" onClick = {() => handling_editmode()}>Edit</button>
					<button type="button" class="btn btn-primary btn-sm menubutton">Remove</button>
				</div>
				<div className="row">
					<div class="table-responsive">
						<table id="items" className="table table-hover">
							<thead>
								{editmode === true?
									<tr>
										<th style = {{color: ""}} scope="col">ID</th>
										<th style = {{color: "3C3C3C"}} scope="col">Name</th>
										<th style = {{color: "3C3C3C"}} scope="col">Category</th>
										<th style = {{color: "3C3C3C"}} scope="col">Price</th>
										<th style = {{color: "3C3C3C"}} scope="col">Description</th>
										<th style = {{color: "3C3C3C"}} scope="col">Portion Size</th>
										<th style = {{color: "3C3C3C"}} scope="col">Prep Time</th>
										<th style = {{color: "3C3C3C"}} scope="col">Picture</th>
									</tr>:
									<tr>
										<th/>
										<th style = {{color: ""}} scope="col">ID</th>
										<th style = {{color: "3C3C3C"}} scope="col">Name</th>
										<th style = {{color: "3C3C3C"}} scope="col">Category</th>
										<th style = {{color: "3C3C3C"}} scope="col">Price</th>
										<th style = {{color: "3C3C3C"}} scope="col">Description</th>
										<th style = {{color: "3C3C3C"}} scope="col">Portion Size</th>
										<th style = {{color: "3C3C3C"}} scope="col">Prep Time</th>
									</tr>
								}
							</thead>
							{
								[...menu.keys()].map(
									(x, i) => {
										return (
											<tbody>
												{editmode === true && edit[i] === true?
												<tr key = {x.ID}>
													<td style = {{color: "3C3C3C"}}>{menu[i].DishID}</td>
													<td><input class="form-control form-control-sm" type="text" placeholder="Name"/></td>
													<td><input class="form-control form-control-sm" type="text" placeholder="Category"/></td>
													<td><input class="form-control form-control-sm" type="text" placeholder="Price"/></td>
													<td><input class="form-control form-control-sm" type="text" placeholder="Description"/></td>
													<td><input class="form-control form-control-sm" type="text" placeholder="Portion Size"/></td>
													<td><input class="form-control form-control-sm" type="text" placeholder="Prep Time"/></td>
													<td><button type="button" class="btn btn-primary btn-sm imagebutton">Upload Image<input type="file"/></button></td>
												</tr>:
												<tr key = {x.ID}>
													<td><input type="checkbox" class="form-check-input"/></td>
													<td style = {{color: "3C3C3C"}}>{menu[i].DishID}</td>
													<td style = {{color: "3C3C3C"}}>{menu[i].Name}</td>
													<td style = {{color: "3C3C3C"}}>{menu[i].Category}</td>
													<td style = {{color: "3C3C3C"}}>{menu[i].SalePrice}</td>
													<td style = {{color: "3C3C3C"}}>{menu[i].Description}</td>
													<td style = {{color: "3C3C3C"}}>{menu[i].PortionSize}</td>
													<td style = {{color: "#576271"}}>{menu[i].PrepTime}</td>
												</tr>														
											}
											</tbody>
										);
									}
								)
							}
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminMenu;