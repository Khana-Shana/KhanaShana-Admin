import React from "react";
import "./AdminDeals.css";
import DealCard from "./DealCard";
import {Link} from 'react-router-dom';

function AdminDeals() {
  return (
    <div>
      {/* This component returns daily and weekly cards */}
      <div className="container mainbox">
        <div
          className="col d-flex justify-content-end"
          style={{ marginBottom: "1%" }}
        >
          <Link to="/wheel">
            <button type="button" className="btn btn-sm dealbutton">
              Discount Wheel >>
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col">
            <DealCard dealtype="Daily Deal" />
          </div>
          <div className="col">
            <DealCard dealtype="Weekly Deal" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDeals;
