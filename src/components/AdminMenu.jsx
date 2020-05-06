import React , { useState, useEffect } from 'react';
import './AdminMenu.css';
import firebase_integration from '../Fire.js'
import ReactBootstrap, {Table} from 'react-bootstrap';
import { wait } from '@testing-library/react';

function AdminMenu(){
	const [menu, setmenu] = useState([])
	const [editmode, seteditmode] = useState(false)
	const [filteredmenu, setfilteredmenu] = useState([])
	const [selectall, setselectall] = useState(false)
	useEffect(() => {
		firebase_integration.database.collection('Menu').onSnapshot((snapshot) => {
			var menu_items = []
					snapshot.docs.forEach(doc => {
					menu_items.push(doc.data())
				});
					setmenu(menu_items)
					setfilteredmenu(menu_items)
				})
	},filteredmenu)
	
	function handling_editmode() {
		var newmenu = []
		menu.map((_,i) => {
			if(document.getElementsByClassName("itemcheckbox")[i].checked)
			{
				newmenu.push(menu[i])
			}
		})
		setfilteredmenu(newmenu)
		seteditmode(true)
	}
	function handleselect() {
		if(selectall === false)
		{
			setselectall(true)
			menu.map((_,i) => document.getElementsByClassName("itemcheckbox")[i].checked = true)
		}
		else
		{
			setselectall(false)
			menu.map((_,i) => document.getElementsByClassName("itemcheckbox")[i].checked = false)
		}
	}
	function uploadMenuImage(id){
		var image = document.getElementById(id).files[0]
		var imageName = image.name
		var uploadTask = firebase_integration.storage.ref().child('Menu/'+imageName).put(image);
		uploadTask.on('state_changed', 
		function(snapshot) {
			var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			// console.log('Upload is ' + progress + '% done');
		}, function(error) {
			alert(error.message)
		}, function() {
			firebase_integration.storage.ref().child('Menu/'+imageName).getDownloadURL().then(function(downloadURL) {
			firebase_integration.database.collection('Menu').doc(id.toString()).update({
					ImageName: imageName,
					URL: downloadURL
				})
			});
		});
	}

	function updateDatabase() {
		filteredmenu.map((item,i) => {
			firebase_integration.database.collection('Menu').doc(item.DishID.toString()).update({
				DishID: item.DishID,
				Category: document.getElementsByClassName("categorydropdown")[i].value,
				Description: item.Description,
				Name: item.Name,
				PortionSize: item.PortionSize,
				PrepTime: item.PrepTime,
				SalePrice: parseInt(item.SalePrice),
			  });
		})
		seteditmode(false)
		setselectall(false)
		setfilteredmenu(menu)
	}
	
	async function removeItems(){
		var items_removed = []
		menu.map((_,i) => {
			if(document.getElementsByClassName("itemcheckbox")[i].checked)
			{
				items_removed.push(menu[i])
			}
		})
		console.log(items_removed)
		items_removed.map((item) => {
			firebase_integration.database.collection('Menu').doc(item.DishID.toString()).get().then((docs) => {
				firebase_integration.storage.ref().child('Menu/'+docs.data().ImageName).delete()
				firebase_integration.database.collection('Menu').doc(item.DishID.toString()).delete()
			})
		})
		items_removed.length === 0
			?setfilteredmenu(menu)
			:setfilteredmenu([])
		setselectall(false)
	}
	function AddItem() {
		var newDishID = 0
		menu.map((x) => {
			if(x.DishID > newDishID)
			{
				newDishID = x.DishID
			} 
		})
		menu.length === 0
		? newDishID = 0
		: newDishID += 1
		firebase_integration.database.collection("Menu").doc(newDishID.toString()).set({
			DishID: newDishID,
			Category: "All", 
			Name: "Lorem Ipsum",
			Description: "Lorem Ipsum",
			PortionSize: "Lorem Ipsum",
			PrepTime: "Lorem Ipsum",
			SalePrice: 0
		})
		setfilteredmenu([])
	}
	function renderTable() {
		return (
			filteredmenu.map((x,i) => {
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
							<td>
								<select className="form-control categorydropdown">
									<option value="All">All</option>
									<option value="Desi">Desi</option>
									<option value="Dessert">Dessert</option>
									<option value="Italian">Italian</option>
									<option value="Burger">Burger</option>
									<option value="Chinese">Chinese</option>
									<option value="Sandwich">Sandwich</option>
								</select>
							</td>
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
						</tr>
						:<tr>
							<th scope="row">
								<div class="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input itemcheckbox" id={i+1}/>
									<label class="custom-control-label" for={i+1}/>
								</div>
							</th>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].DishID}</td>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].Name}</td>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].Category}</td>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].SalePrice}</td>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].Description}</td>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].PortionSize}</td>
							<td style = {{color: "#576271"}}>{filteredmenu[i].PrepTime}</td>
							<td><button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect imagebutton">Upload Image<input id={filteredmenu[i].DishID+" img"} type="file" accept="image/png, image/jpeg" onChange = {() => uploadMenuImage(filteredmenu[i].DishID+" img")}/></button></td>
						</tr>
					}
						
				</tbody>
				);
			})
		);
	}

	return(
		<div>
			<div id="menubox" className="container">
				{editmode
					?<div className="row">
						<button id = "edit" type="button" class="btn menubutton" onClick={() => updateDatabase()}>Save</button>
					</div>
					:<div className="row">
						<button type="button" class="btn btn-sm menubutton" onClick = {() => AddItem()}>Add</button>
						<button type="button" class="btn btn-sm menubutton" onClick = {() => removeItems()}>Remove</button>
						<button id = "edit" type="button" class="btn btn-sm menubutton" onClick = {() => handling_editmode()}>Edit</button>
					</div>

				}
				<div className="row">
					<div className = "table-responsive">
						<table className = " table table-hover">
							<thead>
								{editmode === true?
									<tr>
										<th style = {{color: "3C3C3C"}} scope="col">ID</th>
										<th style = {{color: "3C3C3C"}} scope="col">Name</th>
										<th style = {{color: "3C3C3C"}} scope="col">Description</th>
										<th style = {{color: "3C3C3C"}} scope="col">Price</th>
										<th style = {{color: "3C3C3C"}} scope="col">Description</th>
										<th style = {{color: "3C3C3C"}} scope="col">Portion Size</th>
										<th style = {{color: "3C3C3C"}} scope="col">Prep Time</th>
									</tr>:
									<tr>
										<th>
											<div class="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id={0} checked = {selectall} onClick = {() => handleselect()}/>
												<label class="custom-control-label" for={0}/>
											</div>
										</th>
										<th style = {{color: "3C3C3C"}} scope="col">ID</th>
										<th style = {{color: "3C3C3C"}} scope="col">Name</th>
										<th style = {{color: "3C3C3C"}} scope="col">Category</th>
										<th style = {{color: "3C3C3C"}} scope="col">Price</th>
										<th style = {{color: "3C3C3C"}} scope="col">Description</th>
										<th style = {{color: "3C3C3C"}} scope="col">Portion Size</th>
										<th style = {{color: "3C3C3C"}} scope="col">Prep Time</th>
										<th style = {{color: "3C3C3C"}} scope="col">Picture</th>
									</tr>
								}
							</thead>
							{renderTable()}
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AdminMenu;