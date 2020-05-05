import React from 'react';
import './AdminMenu.css';
import DealCard from './DealCard';
import DiscountWheel from './DiscountWheel';

function AdminDeals() {
    return (
        <div>
            <div className = "container mainbox">
                <div className = "row">
                    <div className = "col">
                        {/* <DiscountWheel/> */}
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