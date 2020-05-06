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

    const checkInputField = () => {
        // return true;
        if (name === "" || email === "" || password === "" || position === "") {
          alert.show("Please fill in all the fields.");
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
                      onClick={() => {if(checkInputField)
                        {onRegister()}
                        else{
                            alert("hey")
                        }
                    }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    
    async function onRegister() {
        try {
          await firebase_integration.register(name, email, password);
          // await firebase.addQuote(quote)
          props.history.replace('./')
        //   continuefwd();
        } catch (error) {
          alert("An error occured while signing up. Please Try Again!");
          console.log(error.message)
        }
      }
}

export default withRouter(Signup);