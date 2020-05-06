import React from 'react';
import './AdminDeals.css';
import DealCard from './DealCard';

function AdminDeals() {
    return (
        <div>
            <div className = "container mainbox">
                <div className = "col d-flex justify-content-end" style = {{marginBottom: "1%"}}>
                    <a href="/wheel"><button type="button" className="btn btn-sm dealbutton">Discount Wheel >></button></a>
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