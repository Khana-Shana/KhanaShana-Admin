import React from 'react';
import './AdminMenu.css';
import DealCard from './DealCard';
import DiscountWheel from './DiscountWheel'
import firebase_integration from '../Fire.js'

function AdminDeals() {
    const [dailydeal, setdailydeal] = React.useState("")
    const [weeklydeal, setweeklydeal] = React.useState("")
    React.useEffect( ()=> {
        var deals = []
        firebase_integration.database.collection("Deals").orderBy("DealType", "desc").onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.data())
                deals.push(doc.data())
            })
            if(deals.length === 2){
                setweeklydeal(deals[1])
                setdailydeal(deals[0])  
            }
            else if(deals.length === 1){
                if(deals[0].DealType === "Daily") {
                    setdailydeal(deals[0])
                }
                else {
                    setweeklydeal(deals[0])
                }
            }
        })
    }, [])
    
    // function addDailyDeal() {
    //     firebase_integration.collection("Deals").doc("Daily").set({
    //         DealType: "Daily",
    //         Name: ,
    //         Price: ,
    //         MenuID: ,
    //         ImageName: ,
    //         ImageURL: ""
    //     })
    // }

    // function addWeeklyDeal() {
    //     firebase_integration.collection("Deals").doc("Weekly").set({
    //         DealType: "Weekly",
    //         Name: ,
    //         Price: ,
    //         MenuID: ,
    //         ImageName: ,
    //         ImageURL: ""
    //     })
    // }

    // function uploadDealImage(id, dealtype){
	// 	var image = document.getElementById(id).files[0]
	// 	var imageName = image.name
	// 	console.log(imageName)
	// 	var uploadTask = firebase_integration.storage.ref().child('Deals/'+imageName).put(image);
	// 	uploadTask.on('state_changed', 
	// 	function(snapshot) {
	// 		var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	// 		console.log('Upload is ' + progress + '% done');
	// 	}, function(error) {
	// 		alert(error.message)
	// 	}, function() {
	// 		firebase_integration.storage.ref().child('Deals/'+imageName).getDownloadURL().then(function(downloadURL) {
	// 		firebase_integration.database.collection('Deals').doc(dealtype()).update({
	// 				ImageName: imageName,
	// 				ImageURL: downloadURL
	// 			})
	// 		});
	// 	});
    // }
    
    // function removeDeal(dealtype){
    //     firebase_integration.database.collection('Deals').doc(dealtype).get().then((docs) => {
    //         firebase_integration.storage.ref().child('Deals/'+docs.data().ImageName).delete()
    //         firebase_integration.database.collection('Deals').doc(dealtype).set({
        //         DealType: dealtype,
        //         Name: "",
        //         Price: "",
        //         MenuID: "",
        //         ImageName: "",
        //         ImageURL: ""
    //           })
    //     })
    // }

    return (
        <div>
            {console.log(dailydeal)}
            {console.log(weeklydeal)}
            <div className = "container mainbox">
                <div className = "col d-flex justify-content-end" style = {{marginBottom: "1%"}}>
                    <a href="/wheel"><button type="button" className="btn btn-primary btn-sm dealbutton"> Discount Wheel >></button></a>
                </div>
                <div className = "row">
                    <div className = "col">
                        <DealCard
                            dealtype = "Daily Deal"
                        />
                    </div>
                    <div className = "col">
                        <DealCard
                            dealtype = "Weekly Deal"
                        />
                    </div>
                </div>
             
            </div>
        </div>
    );
}
export default AdminDeals;