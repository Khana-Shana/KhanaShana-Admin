import React from 'react';
import './AdminDeals.css';

function DealCard(props) {
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
                        <input type="text" className="form-control form-control-sm" placeholder="Name"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" placeholder="Price"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Menu ID</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control form-control-sm" placeholder="Menu ID"></input>
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