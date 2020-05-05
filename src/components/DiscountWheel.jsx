import React from 'react';
import './DiscountWheel.css';

function DiscountWheel() {
    //effe
    return (
        <div>
            
            <div className="container pa5 inBox">
                <div className="row">
                    <div className ="col d-flex justify-content-start">
                        <a href="/deals"><button type="button" className="btn btn-primary dealbutton mb2">{"<<"} Deals </button></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col wheel">
                        <form>
                             <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Discount 1</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-sm" placeholder="Name" ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Discount 2</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-sm" placeholder="Price" ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Discount 3</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-sm" placeholder="Menu ID" ></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DiscountWheel; 


// <div>
//             <div className = "row">
//                 <div className = "col d-flex justify-content-start" style = {{marginTop: "1%"}}>
//                     <a href="/wheel"><button type="button" className="btn btn-primary btn-sm dealbutton">{"<<"} Deals </button></a>
//                 </div>
        
//                 <div className = "container dealcard">
//                         <div className ="col">
//                             <img src ="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Deals%2Fadminwheel.png?alt=media&token=a90f8144-1809-4b9e-ab67-49e94019f54f"/>
//                         </div>
//                     </div>
//                     <div className = "row">
//                         <div className = "col">
//                             <form>
//                                 <div className="form-group row">
//                                     <div className="col-sm-4">
//                                         <input type="text" className="form-control form-control-sm" placeholder="Discount"></input>
//                                     </div>
//                                     <div className="col-sm-4">
//                                         <input type="text" className="form-control form-control-sm" placeholder="Discount"></input>
//                                     </div>
//                                     <div className="col-sm-4">
//                                         <input type="text" className="form-control form-control-sm" placeholder="Discount"></input>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//             </div>
//         </div>