import React from 'react';
import './AdminDeals.css';

function DiscountWheel() {
    return (
        <div className = "container discountwheel">
            <div className = "row">
                <div className ="col">
                    <img src ="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Deals%2Fadminwheel.png?alt=media&token=a90f8144-1809-4b9e-ab67-49e94019f54f"/>
                </div>
            </div>
            <div className = "row">
                <div className = "col">
                    <form>
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <input type="text" className="form-control form-control-sm" placeholder="Discount"></input>
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control form-control-sm" placeholder="Discount"></input>
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control form-control-sm" placeholder="Discount"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default DiscountWheel; 