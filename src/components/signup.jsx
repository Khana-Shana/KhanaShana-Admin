import React from 'react';
import { useState, useEffect } from "react";
// import { useAlert } from 'react-alert'
import firebase_integration from "../Fire";
import { Link, withRouter } from "react-router-dom";
import "./loginstyles.css";



function Signup(props){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [position, setPosition] = useState("");
    const [error, setError] = useState("");
    let counter = 0

    const checkInputField = () => {
        // return true;
        if (name === "" || email === "" || password === "" || position === "") {
          alert("Please fill in all the fields.");
          return false;
        } else {
          // if(values.password === values.confirmpswd)
          // {
          return true;
          // }
          // alert("Passwords don't match.");
        }
      };
      

    return(
        <div className="logcardback1">
        <div className="button-position">
          <label className="login-button">
            <input type="checkbox" />
            <span className="back">
              <div className="butt"></div>
              <span className="toggle"></span>
              <span className="label on">LOGIN</span>
              <span className="label off">
                SIGN UP
              </span>
            </span>
          </label>
        </div>
        <div className="login-text">GET ON BOARD!</div>
        <div className="form-div">
          <div className="modal-dialog modal-login">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">SIGN UP</h4>
              </div>
              <div className="modal-body">
                <form
                  action="/examples/actions/confirmation.php"
                  method="post"
                  onSubmit={(e) => e.preventDefault() && false}
                >
                    <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Position"
                      required="required"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required="required"
                      value={password}
                      onChange={(p) => setPassword(p.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary btn-block btn-lg"
                      value="Sign Up"
                      onClick={() => {if (checkInputField && counter === 0){
                                        counter+=1
                                        onRegister();                                      
                                      }}}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    async function logout() {
      await firebase_integration.logout();
      // alert("logged out");
      props.history.replace("./login")
  }
    
    async function onRegister() {
      try {
        firebase_integration.register(name, email, password).then(()=>
          firebase_integration.database.collection("AdminDatabase").doc(firebase_integration.auth.currentUser.uid.toString()).set({
            AdminID: firebase_integration.auth.currentUser.uid,
            EmailID: email,
            Name: name,
            Position: position
          })
        );
        logout();        
      } catch (error) {
        alert("An error occured while signing up. Please Try Again!", error.message);
      }
    }


}

export default withRouter(Signup);