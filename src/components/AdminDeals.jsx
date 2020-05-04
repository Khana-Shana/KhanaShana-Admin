import React from 'react';
import './AdminMenu.css';
import DealCard from './DealCard';
import DiscountWheel from './DiscountWheel';

function AdminDeals() {
    return (
        <div>
            <div className = "container mainbox">
                <div className = "row">
                    <div className = "col d-flex justify-content-center">
                        <DiscountWheel/>
                    </div>
                    <div className = "col">
                            <DealCard
                                dealtype = "Daily Deal"
                            />
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