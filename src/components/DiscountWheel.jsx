import React from "react";
import "./DiscountWheel.css";
import firebase_integration from "../Fire.js";
import {Link} from 'react-router-dom'

function DiscountWheel() {
  // Deal values stored as hooks to render the screen
  const [mydata1, setdata1] = React.useState(0);
  const [mydata2, setdata2] = React.useState(0);
  const [mydata3, setdata3] = React.useState(0);

  //Data fetched from firestore
  React.useEffect(() => {
    try {
      firebase_integration.database
        .collection("DiscountWheel")
        .onSnapshot((snapshot) => {
          var data = [];
          snapshot.forEach((doc) => {
            data.push(doc.data().value.split("%")[0]);
          });
          setdata1(data[0]);
          setdata2(data[1]);
          setdata3(data[2]);
        });
    } catch (error) {
      alert("An error occured. Please try again!");
    }
  }, []);

  function checkLength(val) {
    if (val < 100 && val > -1) {
      return true;
    }
    return false;
  }

  //Updates the database with new discount values
  function updateDB() {
    firebase_integration.database
      .collection("DiscountWheel")
      .doc("1")
      .set({
        value: mydata1 + "%",
      })
      .catch(function (error) {
        alert("An error occured. Please try again!");
      });
    firebase_integration.database
      .collection("DiscountWheel")
      .doc("2")
      .set({
        value: mydata2 + "%",
      })
      .catch(function (error) {
        alert("An error occured. Please try again!");
      });
    firebase_integration.database
      .collection("DiscountWheel")
      .doc("3")
      .set({
        value: mydata3 + "%",
      })
      .catch(function (error) {
        alert("An error occured. Please try again!");
      });
      alert("Discount Wheel successfully updated!");
  }

  return (
    //Return the discount wheel card
    <div>
      <div className="container pa5 inBox">
        <div className="row">
          <div className="col d-flex justify-content-start">
            <Link to="/deals">
              <button type="button" className="btn dealbutton mb2">
                {"<<"} Deals{" "}
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col wheel">
            <form>
              <div className="form-label d-flex justify-content-center title">
                <b>Discount Wheel</b>
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-form-label">Discount 1</label>
                <div className="col-lg-10">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="Enter Discount Percentage"
                    maxLength="2"
                    min="0"
                    max="99"
                    value={mydata1}
                    onChange={(e) => {
                      checkLength(e.target.value)
                        ? setdata1(e.target.value)
                        : alert("Please input a value between 0 and 100");
                    }}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-form-label">Discount 2</label>
                <div className="col-lg-10">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="Enter Discount Percentage"
                    maxLength="2"
                    min="0"
                    max="99"
                    value={mydata2}
                    onChange={(e) =>
                      checkLength(e.target.value)
                        ? setdata2(e.target.value)
                        : alert("Please input a value between 0 and 100")
                    }
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-form-label">Discount 3</label>
                <div className="col-lg-10">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="Enter Discount Percentage"
                    maxLength="2"
                    min="0"
                    max="99"
                    value={mydata3}
                    onChange={(e) =>
                      checkLength(e.target.value)
                        ? setdata3(e.target.value)
                        : alert("Please input a value between 0 and 100")
                    }
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-sm updatebutton"
                    onClick={() => updateDB()}
                  >
                    Update Discount Wheel
                  </button>
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
