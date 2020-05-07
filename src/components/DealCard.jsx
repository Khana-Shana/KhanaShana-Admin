import React, { useState } from 'react';
import './AdminDeals.css';
import firebase_integration from '../Fire.js'

function DealCard(props) {
    const [name, setname] = React.useState("")
    const [price, setprice] = React.useState(1)
    const [menuid, setmenuid] = React.useState(0)
    const [highestmenuid, setid] = React.useState(0)

    React.useEffect(() => {
        var deals = []
        firebase_integration.database.collection("Deals").orderBy("DealType", "asc").onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                console.log("DEALS UPDATED")
                deals.push(doc.data())
            })
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
        firebase_integration.database.collection("Menu").orderBy("DishID", "desc").limit(1).onSnapshot((snapshot) => {
            var highest_id = 0
            snapshot.forEach((doc) => {
                highest_id = doc.data().DishID
            })
            if(highest_id != 0){
                setid(() => highest_id +1)
            }
        })
    }, [])


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
    function uploadDealImage(dealtype){
        var uploader = document.getElementById(dealtype+" uploader");
        var image = document.getElementById(dealtype+" image").files[0]
        var imageName = image.name
        console.log(imageName)
        var uploadTask = firebase_integration.storage.ref().child('Deals/'+imageName).put(image);
        uploadTask.on('state_changed', 
        function(snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            uploader.value = progress
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
                {/* <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Menu ID</label>
                    <div className="col-lg-10">
                        <input type="text" className="form-control form-control-sm" placeholder="Menu ID" value = {menuid} onChange = {(e) => setmenuid(e.target.value)}></input>
                    </div>
                </div> */}
                {
                menuid==="" 
                ? <div></div>
                :   <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Image</label>
                        <div className="col-lg-10">
                            <button type="button" className="btn  btn-sm imgbutton">Upload Image<input id={props.dealtype+" image"} type="file" onChange={()=>uploadDealImage(props.dealtype)} accept="image/png, image/jpeg"/></button>
                            <progress value="0" max="100" id={props.dealtype+" uploader"}>0%</progress>
                        </div>
                    </div>
                }
                
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