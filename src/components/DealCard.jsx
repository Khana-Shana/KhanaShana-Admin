import React, { useState } from 'react';
import './AdminDeals.css';
import firebase_integration from '../Fire.js'

function DealCard(props) {
    const [name, setname] = React.useState("")
    const [price, setprice] = React.useState(0)
    const [menuid, setmenuid] = React.useState("")
    React.useEffect(() => {
        var deals = []
        firebase_integration.database.collection("Deals").orderBy("DealType", "desc").onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
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
    }, [])
    return (
        <div className = "dealcard">
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"><b>{props.dealtype}</b></label>
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary btn-sm dealbutton">Remove Deal</button>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" placeholder="Name" value = {name} onChange = {(e) => setname(e.target.value)}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" placeholder="Price" value = {price} onChange = {(e) => setprice(e.target.value)}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Menu ID</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" placeholder="Menu ID" value = {menuid} onChange = {(e) => setmenuid(e.target.value)}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Image</label>
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary btn-sm imgbutton">Upload Image</button>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary btn-sm dealbutton">Add Deal</button>
                    </div>
                </div>     
            </form>
        </div>
    );
}
export default DealCard;