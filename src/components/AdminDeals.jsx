import React from 'react';
import './AdminMenu.css';
import DealCard from './DealCard';
import DiscountWheel from './DiscountWheel';

function AdminDeals() {
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