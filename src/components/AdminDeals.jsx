import React from 'react';
import './AdminMenu.css';
import DealCard from './DealCard';
import firebase_integration from '../Fire.js'

function AdminDeals() {
    const [dailydeal, setdailydeal] = React.useState()
    const [weeklydeal, setweeklydeal] = React.useState()
    React.useEffect( ()=> {
        firebase_integration.collection("Deals").onSnapshot((snapshot) => {
            
        })
    })
    return (
        <div>
            <div className = "container mainbox">
                <div className = "row">
                    <div className = "col d-flex justify-content-end" style = {{marginBottom: "1%"}}>
                        <button type="button" className="btn btn-primary btn-sm dealbutton">Discount >></button>
                    </div>
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