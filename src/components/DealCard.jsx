import React, { useState } from 'react';
import './AdminDeals.css';
import firebase_integration from '../Fire.js'

function DealCard(props) {
    //useState hook declared to render the screen when they are updated
    const [name, setname] = React.useState("")
    const [price, setprice] = React.useState(1)
    const [menuid, setmenuid] = React.useState(0)
    const [highestmenuid, sethighestmenuid] = React.useState(0)
    const [progressb, setprogresb] = React.useState(0)

    //Deal fetched from firestore
    React.useEffect(() => {
        var deals = []
        firebase_integration.database.collection("Deals").orderBy("DealType", "asc").onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                console.log("DEALS UPDATED")
                deals.push(doc.data())
            })
            //These conditions differentiate between daily and weekly deal
            if(deals.length === 2){
                if(props.dealtype === "Daily Deal") {
                    setname(deals[0].Name)
                    setprice(deals[0].Price)
                    setmenuid(deals[0].MenuID)
                }
                else {
                    setname(deals[1].Name)
                    setprice(deals[1].Price)
                    setmenuid(deals[1].MenuID)
                }     
            }
            else if(deals.length === 1){
                if(deals[0].DealType === "Daily") {
                    if(props.dealtype === "Daily Deal") {
                        setname(deals[0].Name)
                        setprice(deals[0].Price)
                        setmenuid(deals[0].MenuID)
                    }
                }
                else {
                    if(props.dealtype === "Weekly Deal") {
                        setname(deals[0].Name)
                        setprice(deals[0].Price)
                        setmenuid(deals[0].MenuID)
                    }
                }
            }
        })
        //Assigns dish id to the deal. Formula: (highestid + 1)
        firebase_integration.database.collection("Menu").orderBy("DishID", "desc").limit(1).onSnapshot((snapshot) => {
            var highest_id = 0
            snapshot.forEach((doc) => {
                highest_id = doc.data().DishID
            })
            if(highest_id != 0){
                sethighestmenuid(() => highest_id +1)
            }
        })
    }, [])

    //Called when the add button is clicked. Updates the daily deal
    function addDailyDeal() {
        firebase_integration.database.collection("Deals").doc("Daily").set({
            DealType: "Daily",
            Name: name,
            Price: parseInt(price),
            MenuID: highestmenuid,
            ImageName: "",
            URL: ""
        })
        firebase_integration.database.collection("Menu").doc(highestmenuid.toString()).set({
            DishID: highestmenuid,
            Category: "Daily Deal", 
            Name: name,
            Description: "",
            PortionSize: "",
            PrepTime: "30 mins",
            SalePrice: parseInt(price),
            ImageName: "",
            URL: ""
        })
        setmenuid(highestmenuid)
        alert("Daily Deal successfully added!")
    }
    //Called when the add button is clicked. Updates weekly deal
    function addWeeklyDeal() {
        firebase_integration.database.collection("Deals").doc("Weekly").set({
            DealType: "Weekly",
            Name: name,
            Price: parseInt(price),
            MenuID: highestmenuid,
            ImageName: "",
            URL: ""
        })
        firebase_integration.database.collection("Menu").doc(highestmenuid.toString()).set({
            DishID: highestmenuid,
            Category: "Weekly Deal", 
            Name: name,
            Description: "",
            PortionSize: "",
            PrepTime: "30 mins",
            SalePrice: parseInt(price),
            ImageName: "",
            URL: ""
        })
        setmenuid(highestmenuid)
        alert("Weekly Deal successfully added!")
    }
    //called when image is uploaded by the user
    function uploadDealImage(dealtype){
        var image = document.getElementById(dealtype+" image").files[0]
        var imageName = image.name
        console.log(imageName)
        var uploadTask = firebase_integration.storage.ref().child('Deals/'+imageName).put(image);
        uploadTask.on('state_changed', 
        function(snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setprogresb(progress)
        }, function(error) {
            alert(error.message)
        }, function() {
            firebase_integration.storage.ref().child('Deals/'+imageName).getDownloadURL().then(function(downloadURL) {
            dealtype = dealtype.split(" ")[0]
            firebase_integration.database.collection('Deals').doc(dealtype).update({
                    ImageName: imageName,
                    URL: downloadURL
                })
            firebase_integration.database.collection("Menu").doc(menuid.toString()).update({
                ImageName: imageName,
                URL: downloadURL
            })
        });
        });
    }
    //deal is removed and updated from the database
    function removeDeal(dealtype){
        dealtype = dealtype.split(" ")[0]
        firebase_integration.database.collection('Menu').doc(menuid.toString()).delete()
        firebase_integration.database.collection('Deals').doc(dealtype).get().then((docs) => {
            firebase_integration.storage.ref().child('Deals/'+docs.data().ImageName).delete()
            firebase_integration.database.collection('Deals').doc(dealtype).set({
                DealType: dealtype,
                Name: "",
                Price: 1,
                MenuID: "",
                ImageName: "",
                URL: ""
              })
        })
        setname("")
        setprice(1)
        setmenuid("")
    }

    return (
        <div className = "dealcard">
            {/* Returns the card and displays it on screen */}
            <form>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label"><b>{props.dealtype}</b></label>
                    <div className="col-lg-10">
                        <button type="button" className="btn  btn-sm dealbutton" onClick={()=>removeDeal(props.dealtype)}>Remove Deal</button>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Name</label>
                    <div className="col-lg-10">
                        <input type="text" className="form-control form-control-sm" placeholder="Name" value = {name} onChange = {(e) => setname(e.target.value)}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Price</label>
                    <div className="col-lg-10">
                        <input type="text" className="form-control form-control-sm" placeholder="Price" value = {price} onChange = {(e) => setprice(e.target.value)}></input>
                    </div>
                </div>
                {/* Image can only be uploaded if the deal exists on the database */}
                {
                menuid==="" 
                ? <div></div>
                    // Image and its progress bar
                :   <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Image</label>
                        <div className="col-lg-10">
                            <button type="button" className="btn  btn-sm imgbutton">Upload Image<input id={props.dealtype+" image"} type="file" onChange={()=>uploadDealImage(props.dealtype)} accept="image/png, image/jpeg"/></button>
                            <div className="progress" style={{marginTop: "2%"}}>
                                <div id={props.dealtype+" uploader"} className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuenow="0" aria-valuemax="100" style={{width: progressb.toString()+"%"}}></div>
                            </div>
                        </div>
                    </div>
                }
                {/* Add deal butto */}
                <div className="form-group row">
                    <div className="col-lg-10">
                        <button type="button" className="btn  btn-sm dealbutton" onClick = {() => props.dealtype ==="Daily Deal"?addDailyDeal():addWeeklyDeal()}>Add Deal</button>
                    </div>
                </div>     
            </form>
        </div>
    );
}
export default DealCard;