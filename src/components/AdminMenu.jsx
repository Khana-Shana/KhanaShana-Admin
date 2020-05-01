import React , { useState, useEffect } from 'react';
import './AdminMenu.css';
import firebase_integration from '../Fire.js'

function AdminMenu(){
	const [menu, setmenu] = useState([])
	// const [edit, setedit] = useState([])
	const [editmode, seteditmode] = useState(false)
	const [filteredmenu, setfilteredmenu] = useState([])
	useEffect(() => {
		firebase_integration.database.collection('Menu').onSnapshot((snapshot) => {
			var menu_items = []
					snapshot.docs.forEach(doc => {
					menu_items.push(doc.data())
				});
					setmenu(menu_items)
					setfilteredmenu(menu_items)
				})

	}, menu)
	function handling_editmode() {
		var editstates = [];
		var newmenu = []
		menu.map((_,i) => {
			editstates.push(document.getElementsByClassName("form-check-input")[i].checked)
			if(document.getElementsByClassName("form-check-input")[i].checked)
			{
				newmenu.push(menu[i])
			}
		})
		setfilteredmenu(newmenu)
		seteditmode(true)
	}
	return(
		<div>
			{/* {console.log(filteredmenu)} */}
			{/* <input type="text" placeholder="Name"/> */}
			<div id="menubox" className="container">
				<div className="row">
					<button type="button" class="btn btn-primary btn-sm menubutton">Add</button>
					<button type="button" class="btn btn-primary btn-sm menubutton">Remove</button>
					{editmode
						?<button id = "edit" type="button" class="btn btn-primary btn-sm menubutton">Save</button>
						:<button id = "edit" type="button" class="btn btn-primary btn-sm menubutton" onClick = {() => handling_editmode()}>Edit</button>
					}
				</div>
				<div className="row">
					<div className="table-responsive">
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
								[...filteredmenu.keys()].map(
									(x, i) => {
										return (
											<tbody>
												{editmode === true
													?<tr key = {x.ID}>
														<td style = {{color: "3C3C3C"}}>{menu[i].DishID}</td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Name" value/></td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Category"/></td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Price"/></td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Description"/></td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Portion Size"/></td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Prep Time"/></td>
														<td><button type="button" class="btn btn-primary btn-sm imagebutton">Upload Image<input type="file"/></button></td>
													</tr>
													:<tr key = {x.ID}>
														<td><input type="checkbox" class="form-check-input"/></td>
														<td style = {{color: "3C3C3C"}}>{filteredmenu[i].DishID}</td>
														<td style = {{color: "3C3C3C"}}>{filteredmenu[i].Name}</td>
														<td style = {{color: "3C3C3C"}}>{filteredmenu[i].Category}</td>
														<td style = {{color: "3C3C3C"}}>{filteredmenu[i].SalePrice}</td>
														<td style = {{color: "3C3C3C"}}>{filteredmenu[i].Description}</td>
														<td style = {{color: "3C3C3C"}}>{filteredmenu[i].PortionSize}</td>
														<td style = {{color: "#576271"}}>{filteredmenu[i].PrepTime}</td>
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