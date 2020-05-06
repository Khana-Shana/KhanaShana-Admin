import React from 'react';
import { useState, useEffect } from "react";
// import { useAlert } from 'react-alert'
import firebase_integration from "../Fire";
import { Link, withRouter } from "react-router-dom";
import "./loginstyles.css";



function Login(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
        <div className="login-text">WELCOME BACK!</div>
        <div className="form-div">
          <div className="modal-dialog modal-login">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">LOGIN WITH EMAIL</h4>
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
                      value="Sign in"
                      onClick={login}
                    />
                  </div>
                </form>
                <p className="hint-text medium">
                  <Link to="/resetpassword">
                    <a>Forgot Your Password?</a>
                  </Link>
                </p>
                <div className="hint-text medium">
                  Don't have an account?{" "}
                  <a
                    type="button"
                    // onClick={}
                    href="#"
                    className="text-col"
                  >
                    Sign Up!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    
  async function login() {
    try {
      await firebase_integration.login(email, password);
      alert("logged in");
      props.history.replace("/");
    } catch (error) {
      alert("Invalid Email/Password");
      console.log("loginbackerror", error.message);
    }
  }
}

export default withRouter(Login);