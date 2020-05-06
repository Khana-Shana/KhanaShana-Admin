import React from 'react';
import './DiscountWheel.css';
import firebase_integration from '../Fire.js'

function DiscountWheel() {
    const [mydata1, setdata1] = React.useState(0)
    const [mydata2, setdata2] = React.useState(0)
    const [mydata3, setdata3] = React.useState(0)

    React.useEffect(() => {
        firebase_integration.database.collection("DiscountWheel").onSnapshot((snapshot) => {
            var data = []
            snapshot.forEach((doc) => {
                data.push(doc.data().value.split("%")[0])
            })
            setdata1(data[0])
            setdata2(data[1])
            setdata3(data[2])
        })
    },[])

    function updateDB(){
        
        firebase_integration.database.collection("DiscountWheel").doc("1").set({
            value: mydata1+"%"
        })
        firebase_integration.database.collection("DiscountWheel").doc("2").set({
            value: mydata2+"%"
        })
        firebase_integration.database.collection("DiscountWheel").doc("3").set({
            value: mydata3+"%"
        })
    }

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
                            <div className = "form-label d-flex justify-content-center title"><b>Discount Wheel</b></div>
                             <div className="form-group row">
                                <label className="col-lg-2 col-form-label">Discount 1</label>
                                <div className="col-lg-10">
                                    <input type="number" className="form-control form-control-sm" placeholder="Enter Discount Percentage" maxLength="2" min="0" max="99" value={mydata1} onChange={(e)=>{setdata1(e.target.value)}}></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-2 col-form-label">Discount 2</label>
                                <div className="col-lg-10">
                                    <input type="number" className="form-control form-control-sm" placeholder="Enter Discount Percentage" maxLength="2" min="0" max="99" value={mydata2} onChange={(e)=>{setdata2(e.target.value)}}></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-2 col-form-label">Discount 3</label>
                                <div className="col-lg-10">
                                    <input type="number" className="form-control form-control-sm" placeholder="Enter Discount Percentage" maxLength="2" min="0" max="99" value={mydata3} onChange={(e)=>{setdata3(e.target.value)}}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className = "col d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary btn-sm updatebutton" onClick={()=>updateDB()}>Update Discount Wheel</button>
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