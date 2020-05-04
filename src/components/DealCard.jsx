import React from 'react';
import './AdminDeals.css';

function DealCard(props) {
    return (
        <div className = "container dealcard">
            {/* <div className = "row">
                <div className = "col">
                    <div><b>{props.dealtype}</b></div>
                    <div>Name <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm"/></div>
                    <div>Price</div>
                    <div>Menu ID</div>
                    <div>Image</div>
                    <button type="button" class="btn btn-primary btn-sm dealbutton">Add Deal</button>
                </div>
            </div> */}
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"><b>{props.dealtype}</b></label>
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary btn-sm imagebutton">Upload Image</button>
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
                        <button type="button" className="btn btn-primary btn-sm imagebutton">Upload Image</button>
                    </div>
                </div>     
            </form>
        </div>
    );
}
export default DealCard;