import React , { useState, useEffect } from 'react';
import './AdminMenu.css';
import firebase_integration from '../Fire.js'

function AdminMenu(){
	const [menu, setmenu] = useState([]) //Original menu
	const [editmode, seteditmode] = useState(false) //determines whether to display edit mode interface or the original one
	const [filteredmenu, setfilteredmenu] = useState([]) //used to display items selected for editing
	const [selectall, setselectall] = useState(false) //determines the state of select all checkbox
	const [progressbar, setprogressbar] = useState([]) //state of all image progress bars
	
	// menu is fetched from the database and states are initialized 
	useEffect(() => {
		firebase_integration.database.collection('Menu').orderBy("DishID").onSnapshot((snapshot) => {
			var menu_items = []
			var bar = []
					snapshot.docs.forEach(doc => {
					menu_items.push(doc.data())
					bar.push(0)
				});
					setmenu(menu_items)
					setfilteredmenu(menu_items)
					setprogressbar(bar)
				})
	},filteredmenu)
	
	//called when edit button is clicked
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
	
	//called when a checkbox is selected
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
	
	//called when an image is uploaded
	function uploadMenuImage(id, index){
		var image = document.getElementById(id).files[0]
		var imageName = image.name
		var uploadTask = firebase_integration.storage.ref().child('Menu/'+imageName).put(image);
		uploadTask.on('state_changed', 
		function(snapshot) {
			var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			setprogressbar([...progressbar.slice(0,index),progress,...progressbar.slice(index+1)])
		}, function(error) {
			alert(error.message)
		}, function() {
			firebase_integration.storage.ref().child('Menu/'+imageName).getDownloadURL().then(function(downloadURL) {
			id = id.split(" ")[0] 
			firebase_integration.database.collection('Menu').doc(id.toString()).update({
					ImageName: imageName,
					URL: downloadURL
				})
			});
		});
	}
	
	//called when save button is clicked in order to update the database
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
				ImageName: "",
				URL: ""
			  });
		})
		seteditmode(false)
		setselectall(false)
		setfilteredmenu(menu)
	}
	
	//called when an item is removed in order to update the database
	async function removeItems(){
		var items_removed = []
		menu.map((_,i) => {
			if(document.getElementsByClassName("itemcheckbox")[i].checked)
			{
				items_removed.push(menu[i])
			}
		})
		//resets the daily deal
		items_removed.map((item) => {
			if(item.Category === "Daily Deal"){
				firebase_integration.database.collection('Menu').doc(item.DishID.toString()).delete()
				firebase_integration.database.collection('Deals').doc("Daily").get().then((docs) => {
					firebase_integration.storage.ref().child('Deals/'+docs.data().ImageName).delete()
					firebase_integration.database.collection('Deals').doc("Daily").set({
						DealType: "Daily",
						Name: "",
						Price: 1,
						MenuID: "",
						ImageName: "",
						URL: ""
						})
				})
			}
			//resets the weekly deal
			else if (item.Category === "Weekly Deal"){
				firebase_integration.database.collection('Menu').doc(item.DishID.toString()).delete()
				firebase_integration.database.collection('Deals').doc("Weekly").get().then((docs) => {
					firebase_integration.storage.ref().child('Deals/'+docs.data().ImageName).delete()
					firebase_integration.database.collection('Deals').doc("Weekly").set({
						DealType: "Weekly",
						Name: "",
						Price: 1,
						MenuID: "",
						ImageName: "",
						URL: ""
						})
				})
			}
			//resets other categories
			else{
				firebase_integration.database.collection('Menu').doc(item.DishID.toString()).get().then((docs) => {
					firebase_integration.storage.ref().child('Menu/'+docs.data().ImageName).delete()
					firebase_integration.database.collection('Menu').doc(item.DishID.toString()).delete()
				})
			}
		})
		items_removed.length === 0
			?setfilteredmenu(menu)
			:setfilteredmenu([])
		setselectall(false)
	}

	//adds an item to the menu and updates the database
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
			Name: "Food Item",
			Description: "I am a very amazing food item",
			PortionSize: "All you can eat",
			PrepTime: "0 mins",
			SalePrice: 1
		})
		setfilteredmenu([])
	}

	//displays the body of the table
	function renderTable() {
		var categories = ["All", "Desi", "Italian", "Chinese", "Burger", "Sandwich", "Pizza", "Daily Deal", "Weekly Deal"]
		return (
			// Loop over all the required items to be displayed
			filteredmenu.map((x,i) => {
				return (
					<tbody>
					{/* If edit mode is true then it will allow the user to edit dish details */}
					{editmode === true
						?<tr key = {x.ID}>
							{/* dishid column */}
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].DishID}</td>
							<td><input className="form-control form-control-sm" type="text" placeholder="Name" value = {filteredmenu[i].Name} onChange = {
								e => {
									var changeditem = filteredmenu[i]
									changeditem.Name = e.target.value
									setfilteredmenu([...filteredmenu.slice(0,i),changeditem,...filteredmenu.slice(i+1)])
								}
							}/></td>
							<td>
								{/* category dropdown column */}
								<select className="form-control categorydropdown">
									<option value ={categories.filter(y => y === x.Category)}>{categories.filter(y => y === x.Category)}</option>
									{categories.filter(y => y != x.Category).map(z => {
										return (
											<option value = {z}>
												{z}
											</option>
										);
									})}
								</select>
							</td>
							{/* price column */}
							<td><input className="form-control form-control-sm" type="text" placeholder="Price" value = {filteredmenu[i].SalePrice} onChange = {
								e => {
									var changeditem = filteredmenu[i]
									changeditem.SalePrice = e.target.value
									setfilteredmenu([...filteredmenu.slice(0,i),changeditem,...filteredmenu.slice(i+1)])
								}
							}/></td>
							{/* description column */}
							<td><input className="form-control form-control-sm" type="text" placeholder="Description" value = {filteredmenu[i].Description} onChange = {
								e => {
									var changeditem = filteredmenu[i]
									changeditem.Description = e.target.value
									setfilteredmenu([...filteredmenu.slice(0,i),changeditem,...filteredmenu.slice(i+1)])
								}
							}/></td>
							{/* portion size column */}
							<td><input className="form-control form-control-sm" type="text" placeholder="Portion Size"value = {filteredmenu[i].PortionSize} onChange = {
								e => {
									var changeditem = filteredmenu[i]
									changeditem.PortionSize = e.target.value
									setfilteredmenu([...filteredmenu.slice(0,i),changeditem,...filteredmenu.slice(i+1)])
								}
							}/></td>
							{/* Preparation time column */}
							<td><input className="form-control form-control-sm" type="text" placeholder="Prep Time"value = {filteredmenu[i].PrepTime} onChange = {
								e => {
									var changeditem = filteredmenu[i]
									changeditem.PrepTime = e.target.value
									setfilteredmenu([...filteredmenu.slice(0,i),changeditem,...filteredmenu.slice(i+1)])
								}
							}/></td>
						</tr>
						// Displays these rows if user is not in edit mode
						:<tr>
							<th scope="row">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input itemcheckbox" id={i+1}/>
									<label className="custom-control-label" for={i+1}/>
								</div>
							</th>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].DishID}</td>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].Name}</td>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].Category}</td>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].SalePrice}</td>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].Description}</td>
							<td style = {{color: "3C3C3C"}}>{filteredmenu[i].PortionSize}</td>
							<td style = {{color: "#576271"}}>{filteredmenu[i].PrepTime}</td>
							
							{/* Upload image button */}
							<td><button type="button" className="btn btn-outline-primary btn-sm m-0 waves-effect imagebutton">Upload Image<input id={filteredmenu[i].DishID+" img"} type="file" accept="image/png, image/jpeg" onChange = {() => uploadMenuImage(filteredmenu[i].DishID+" img",i)}/></button></td>
							{/* Progress bar displayed when the image is being uploaded */}
							<td>
								<div className="progress uploaderbar" style = {{marginTop: "7%"}}>
                                	<div id={i.toString() +" uploader"} className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuenow="0" aria-valuemax="100" style={{width: progressbar[i]+"%"}}></div>
                            	</div>
							</td>
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
				// Buttons dislayed in editmode
					?<div className="row">
						<button id = "edit" type="button" className="btn menubutton" onClick={() => updateDatabase()}>Save</button>
					</div>
				// Original buttons displayed
					:<div className="row">
						<button type="button" className="btn btn-sm menubutton" onClick = {() => AddItem()}>Add</button>
						<button type="button" className="btn btn-sm menubutton" onClick = {() => removeItems()}>Remove</button>
						<button id = "edit" type="button" className="btn btn-sm menubutton" onClick = {() => handling_editmode()}>Edit</button>
					</div>

				}
				<div className="row">
					<div className = "table-responsive">
						<table className = " table table-hover">
							<thead>
								{editmode === true?
									<tr>
										{/* Headings displayed if the user is in editmode */}
										<th style = {{color: "3C3C3C"}} scope="col">ID</th>
										<th style = {{color: "3C3C3C"}} scope="col">Name</th>
										<th style = {{color: "3C3C3C"}} scope="col">Description</th>
										<th style = {{color: "3C3C3C"}} scope="col">Price</th>
										<th style = {{color: "3C3C3C"}} scope="col">Description</th>
										<th style = {{color: "3C3C3C"}} scope="col">Portion Size</th>
										<th style = {{color: "3C3C3C"}} scope="col">Prep Time</th>
									</tr>:
									<tr>
										{/* Original headings displayed */}
										<th>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id={0} checked = {selectall} onClick = {() => handleselect()}/>
												<label className="custom-control-label" for={0}/>
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
										<th style = {{color: "3C3C3C"}} scope="col">Progress Bar</th>
									</tr>
								}
							</thead>
							{/* Function called to loop over the items to be displayed */}
							{renderTable()}
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AdminMenu;