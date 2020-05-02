import React , { useState, useEffect } from 'react';
import './AdminMenu.css';
import firebase_integration from '../Fire.js'

function AdminMenu(){
	const [menu, setmenu] = useState([])
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
	function uploadMenuImage(image, id){
		console.log('Chala gya')
		var file = image
		var filesplit = file.split("\\")
		console.log(filesplit[filesplit.length - 1]) 
		var uploadTask = firebase_integration.storage.ref().child('Menu/'+filesplit).put(file);
		console.log('Phas gya 1')
		// uploadTask.on(firebase_integration.storage.TaskEvent.STATE_CHANGED, 
		// function(snapshot) {
		// 	console.log('Phas gya 2')
		// 	var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		// 	console.log('Upload is ' + progress + '% done');
		// 	switch (snapshot.state) {
		// 	case firebase_integration.storage.TaskState.PAUSED: 
		// 		console.log('Upload is paused');
		// 		break;
		// 	case firebase_integration.storage.TaskState.RUNNING: 
		// 		console.log('Upload is running');
		// 		break;
		// 	}
		// }, function(error) {
		// 	alert(error.message)
		// }, function() {
		// 	uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
		// 		console.log(downloadURL)
		// 		firebase_integration.database.collection('Menu').doc(id).set({
		// 			URL: downloadURL
		// 		})
		// 	});
		// });
	}

	function updateDatabase() {
		filteredmenu.map((item) => {
			firebase_integration.database.collection('Menu').doc(item.DishID.toString()).set({
				DishID: item.DishID,
				Category: item.Category,
				Description: item.Description,
				Name: item.Name,
				PortionSize: item.PortionSize,
				PrepTime: item.PrepTime,
				SalePrice: item.SalePrice,
			  });
		})
		filteredmenu.map(x => {
			uploadMenuImage(document.getElementById(x.DishID).value, x.DishID.toString())
		})
		seteditmode(false)
		setmenu([])
	}

	return(
		<div>
			<div id="menubox" className="container">
				<div className="row">
					<button type="button" class="btn btn-primary btn-sm menubutton">Add</button>
					<button type="button" class="btn btn-primary btn-sm menubutton">Remove</button>
					{editmode
						?<button id = "edit" type="button" class="btn btn-primary btn-sm menubutton" onClick={() => updateDatabase()}>Save</button>
						:<button id = "edit" type="button" class="btn btn-primary btn-sm menubutton" onClick = {() => handling_editmode()}>Edit</button>
					}
				</div>
				<div className="row">
					<div className="table-responsive">
						<table id="items" className="table table-hover">
							<thead>
								{editmode === true?
									<tr>
										<th style = {{color: "3C3C3C"}} scope="col">ID</th>
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
										<th style = {{color: "3C3C3C"}} scope="col">ID</th>
										<th style = {{color: "3C3C3C"}} scope="col">Name</th>
										<th style = {{color: "3C3C3C"}} scope="col">Category</th>
										<th style = {{color: "3C3C3C"}} scope="col">Price</th>
										<th style = {{color: "3C3C3C"}} scope="col">Description</th>
										<th style = {{color: "3C3C3C"}} scope="col">Portion Size</th>
										<th style = {{color: "3C3C3C"}} scope="col">Prep Time</th>
									</tr>
								}
							</thead>
							{/* {console.log(filteredmenu)} */}
							{
								filteredmenu.map(
									(x, i) => {
										return (
											<tbody>
												{editmode === true
													?<tr key = {x.ID}>
														<td style = {{color: "3C3C3C"}}>{filteredmenu[i].DishID}</td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Name" value = {filteredmenu[i].Name} onChange = {
															e => {
																var changeditem = filteredmenu[i]
																changeditem.Name = e.target.value
																setfilteredmenu([...filteredmenu.slice(0,i),changeditem,...filteredmenu.slice(i+1)])
															}
														}/></td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Category" value = {filteredmenu[i].Category} onChange = {
															e => {
																var changeditem = filteredmenu[i]
																changeditem.Category = e.target.value
																setfilteredmenu([...filteredmenu.slice(0,i),changeditem,...filteredmenu.slice(i+1)])
															}
														}/></td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Price" value = {filteredmenu[i].SalePrice} onChange = {
															e => {
																var changeditem = filteredmenu[i]
																changeditem.SalePrice = e.target.value
																setfilteredmenu([...filteredmenu.slice(0,i),changeditem,...filteredmenu.slice(i+1)])
															}
														}/></td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Description" value = {filteredmenu[i].Description} onChange = {
															e => {
																var changeditem = filteredmenu[i]
																changeditem.Description = e.target.value
																setfilteredmenu([...filteredmenu.slice(0,i),changeditem,...filteredmenu.slice(i+1)])
															}
														}/></td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Portion Size"value = {filteredmenu[i].PortionSize} onChange = {
															e => {
																var changeditem = filteredmenu[i]
																changeditem.PortionSize = e.target.value
																setfilteredmenu([...filteredmenu.slice(0,i),changeditem,...filteredmenu.slice(i+1)])
															}
														}/></td>
														<td><input class="form-control form-control-sm" type="text" placeholder="Prep Time"value = {filteredmenu[i].PrepTime} onChange = {
															e => {
																var changeditem = filteredmenu[i]
																changeditem.PrepTime = e.target.value
																setfilteredmenu([...filteredmenu.slice(0,i),changeditem,...filteredmenu.slice(i+1)])
															}
														}/></td>
														{/* <td><input id={filteredmenu[i].DishID} type="file" accept="image/png, image/jpeg"/></td> */}
														<td><button type="button" class="btn btn-primary btn-sm imagebutton">Upload Image<input id={filteredmenu[i].DishID} type="file" accept="image/png, image/jpeg"/></button></td>
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