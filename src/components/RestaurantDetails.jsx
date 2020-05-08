import React, { useState, useEffect } from "react";
import ReactBootstrap, {
  InputGroup,
  Form,
  FormControl,
  Nav,
  Button,
  Navbar,
  NavDropdown,
  Table,
} from "react-bootstrap";
import firebase_integration from "../Fire.js";

function RestaurantDetails() {
  const [myData, setData] = useState({});
  let arr = {}; //This array will be used to store field manipulations before the Submit Button is clicked and contents of arr copied to State
  useEffect(() => {
    try {
      firebase_integration.database
        .collection("RestaurantDetails")
        .onSnapshot((snapshot) => {
          snapshot.docs.forEach((doc) => {
            arr["Name"] = doc.data()["Name"];
            arr["ContactDetails"] = doc.data()["ContactDetails"];
            arr["Email"] = doc.data()["Email"];
            arr["Address"] = doc.data()["Address"];
            arr["AboutUs"] = doc.data()["AboutUs"];
            setData(doc.data());
          });
        });
    } catch (error) {
      alert("An error occured. Please try again");
    }
  }, myData);

  const changeName = (event) => {
    arr.Name = event.target.value;
  };

  const changeEmail = (event) => {
    arr.Email = event.target.value;
  };

  const changeContact = (event) => {
    arr.ContactDetails = event.target.value;
  };

  const changeAddress = (event) => {
    arr.Address = event.target.value;
  };

  const changeAboutUs = (event) => {
    arr.AboutUs = event.target.value;
  };

  const submit = () => {
    if (!("Name" in arr)) {
      arr["Name"] = myData.Name;
    }
    if (!("Email" in arr)) {
      arr["Email"] = myData.Email;
    }
    if (!("ContactDetails" in arr)) {
      arr["ContactDetails"] = myData.ContactDetails;
    }
    if (!("Address" in arr)) {
      arr["Address"] = myData.Address;
    }
    if (!("AboutUs" in arr)) {
      arr["AboutUs"] = myData.AboutUs;
    }

    firebase_integration.updateRestaurantDetails(arr, myData);
  };

  return (
    <div>
      <h2 className="tc pa3 ma2">Restaurant Details</h2>
      <div className="row no-gutters">
        <div className="col-md-6 no-gutters">
          <div className="leftside d-flex justify-content-center align-items center">
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label className="b">Name</Form.Label>
                <Form.Control
                  className="ba b--black"
                  type="name"
                  placeholder={myData.Name}
                  onChange={changeName}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="b">Email</Form.Label>
                <Form.Control
                  className="ba b--black"
                  type="email"
                  placeholder={myData.Email}
                  onChange={changeEmail}
                />
              </Form.Group>
              <Form.Group controlId="formBasicContact">
                <Form.Label className="b">Contact</Form.Label>
                <Form.Control
                  className="ba b--black"
                  type="contact"
                  placeholder={myData.ContactDetails}
                  onChange={changeContact}
                />
              </Form.Group>
              <Form.Group controlId="formBasicContact">
                <Form.Label className="b">Address</Form.Label>
                <Form.Control
                  className="ba b--black"
                  type="address"
                  placeholder={myData.Address}
                  onChange={changeAddress}
                />
              </Form.Group>
              <span className="b">About Us</span>
              <Form.Group controlId="formBasicAboutUt">
                <textarea
                  name="message"
                  rows="10"
                  cols="50"
                  className="mt2 ba b--black"
                  placeholder={myData.AboutUs}
                  onChange={changeAboutUs}
                ></textarea>
              </Form.Group>
              <Button className="bg-green w-50" onClick={() => submit()}>
                Apply Changes
              </Button>
            </Form>
          </div>
        </div>
        <div className="col-md-5 no-gutters tr">
          <div className="rightside d-flex justify-content-center align-items center">
            <img
              id="RestaurantDetails"
              className="tr ml5"
              src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/RestaurantDetails%2FRestaurantDetails.svg?alt=media&token=3549ac3c-408d-463f-8680-78d74c09a026"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
