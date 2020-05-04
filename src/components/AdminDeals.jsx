import React from 'react';
import './AdminMenu.css';
import DealCard from './DealCard';

function AdminDeals() {
    return (
        // <div className = "container mainbox">
        //     <div className = "row">
        //         <div className = "col">Discount Wheel</div>
        //         <div className = "col"></div>    
        //     </div>
        // </div>
        <div>
            <DealCard
                dealtype = "Daily"
            />
        </div>
    );
}
export default AdminDeals;