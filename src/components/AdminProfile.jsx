import React from "react";
import { Link } from "react-router-dom";
import firebase_integration from "../Fire";
import "./AdminProfile.css";

function AdminProfile() {
    /* states for form input values */
    const [editname, seteditname] = React.useState(false);
    const [editemail, seteditemail] = React.useState(false);
    const [editpassword, seteditpassword] = React.useState(false);
    const [editposition, seteditposition] = React.useState(false);

    /* states for reading data from database and making changes in the database */
    const [name, setname] = React.useState();
    const [email, setemail] = React.useState();
    const [password, setpassword] = React.useState("");
    const [position, setposition] = React.useState();

  /* reading customer profile data from database */
  React.useEffect(() => {
    try {
      firebase_integration.database
        .collection("AdminDatabase")
        .where(
          "AdminID",
          "==",
          firebase_integration.auth.currentUser.uid.toString()
        )
        .onSnapshot((snapshot) => {
          var admindata = {};
          snapshot.docs.forEach((doc) => {
            admindata = doc.data();
          });
          setname(admindata.Name);
          setemail(admindata.EmailID);
          setposition(admindata.Position)
        });
    }
    catch(error) {
			alert("An error occured. Please try again!");
		};
  }, []);

//   /* functions for updating the database */
  async function updatename(value) {
    try {
    firebase_integration.auth.currentUser
      .updateProfile({
        displayName: value,
      })
      .then(function () {
        firebase_integration.database
          .collection("AdminDatabase")
          .doc(firebase_integration.auth.currentUser.uid.toString())
          .update({
            Name: value,
          });
      })
      .catch(function (error) {
        alert("An error occured. Please try again");
      });
    }
    catch(error) {
			alert("An error occured. Please try again!");
		};
  }
  async function updateemail(value) {
    try {
    firebase_integration.auth.currentUser
      .updateEmail(value)
      .then(function () {
        firebase_integration.database
          .collection("AdminDatabase")
          .doc(firebase_integration.auth.currentUser.uid.toString())
          .update({
            Email: value,
          });
      })
      .catch(function (error) {
        alert("An error occured. Please try again");
      });
    }
    catch(error) {
			alert("An error occured. Please try again!");
		};
  }
  async function updateposition(value) {
    try{
        firebase_integration.database
          .collection("AdminDatabase")
          .doc(firebase_integration.auth.currentUser.uid.toString())
          .update({
            Position: value,
          });
    }
    catch(error) {
			alert("An error occured. Please try again!");
		};
        }
  async function updatepassword(value) {
    try{
    firebase_integration.auth.currentUser
      .updatePassword(value)
      .then(function () {
        alert("Your password has been updated");
      })
      .catch(function (error) {
        alert("An error occured. Please try again");
      });
    }
    catch(error) {
			alert("An error occured. Please try again!");
		};
  }
  return(
    <div className="profileback">
      <div class="hehe container-fluid">
        <div className = "row">
          <div className = "col d-flex justify-content-center">
             <img
               id="profilepic"
               className="mx-auto img-fluid img-circle d-block"
               alt="ProfilePicture"
               src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/CustomerProfile%2Fprofilepic.svg?alt=media&token=ee543aa0-18be-4d30-a73c-1c53d838ac7c"
             />
          </div>
        </div>
        <div class="row my-2">
          <div class="col order-lg-2 d-flex justify-content-center">
            <div class="tab-content py-8">
              <div id="edit">
                <form role="form">
                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label form-control-label">
                      Full name
                    </label>
                    {/* if edit state is true, render an editable input field, else render a read only field*/}
                    {editname === false ? (
                      <div class="col-lg-9">
                        <input
                          class="form-control"
                          type="text"
                          value={name}
                          readonly
                        />
                      </div>
                    ) : (
                      <div class="col-lg-9">
                        <input
                          class="form-control"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                          type="text"
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                        />
                      </div>
                    )}
                    {/* if edit state is true, render a save button, else render edit pencil */}
                    {editname === false ? (
                      <div className="col-lg-1">
                        <a className="pencil" onClick={() => seteditname(true)}>
                          <ion-icon
                            style={{ color: "#955F61" }}
                            size="large"
                            name="create-outline"
                          ></ion-icon>
                        </a>
                      </div>
                    ) : (
                      <div className="col-lg-1 input-group-append">
                        <button
                          className="btn"
                          type="button"
                          id="button-addon2"
                          onClick={() => {
                            seteditname(false);
                            setname(name);
                            updatename(name)
                          }}
                        >
                          Save
                        </button>
                      </div>
                    )}
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label form-control-label">
                      Email
                    </label>
                    {/* if edit state is true, render an editable input field, else render a read only field*/}
                    {editemail === false ? (
                      <div class="col-lg-9">
                        <input
                          class="form-control"
                          type="text"
                          value={email}
                          readonly
                        />
                      </div>
                    ) : (
                      <div class="col-lg-9">
                        <input
                          class="form-control"
                          aria-label="Recipient's email"
                          aria-describedby="button-addon2"
                          type="text"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </div>
                    )}
                    {/* if edit state is true, render a save button, else render edit pencil */}
                    {editemail === false ? (
                      <div className="col-lg-1">
                        <a className="pencil" onClick={() => seteditemail(true)}>
                          <ion-icon
                            style={{ color: "#955F61" }}
                            size="large"
                            name="create-outline"
                          ></ion-icon>
                        </a>
                      </div>
                    ) : (
                      <div className="col-lg-1 input-group-append">
                        <button
                          className="btn"
                          type="button"
                          id="button-addon2"
                          onClick={() => {
                            seteditemail(false);
                            setemail(email);
                            updateemail(email)
                          }}
                        >
                          Save
                        </button>
                      </div>
                    )}
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label form-control-label">
                      Password
                    </label>
                    {editpassword === false ? (
                      <div class="col-lg-9">
                        <input
                          class="form-control"
                          type="password"
                          placeholder="Enter New Password"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                          value={"*******"}
                          readonly
                        />
                      </div>
                    ) : (
                      <div class="col-lg-9">
                        <input
                          class="form-control"
                          type="password"
                          placeholder="Enter New Password"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                        />
                      </div>
                    )}
                    {editpassword === false ? (
                      <div class="col-lg-1">
                        <a class="pencil" onClick={() => seteditpassword(true)}>
                          <ion-icon
                            style={{ color: "#955F61" }}
                            size="large"
                            name="create-outline"
                          ></ion-icon>
                        </a>
                      </div>
                    ) : (
                      <div className="col-lg-1 input-group-append">
                        <button
                          className="btn"
                          type="button"
                          id="button-addon2"
                          onClick={() => {
                            seteditpassword(false);
                            setpassword(password);
                          }}
                        >
                          Save
                        </button>
                      </div>
                    )}
                  </div>
                  {/* Position */}
                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label form-control-label">
                      Position
                    </label>
                    {editposition === false ? (
                      <div class="col-lg-9">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Enter New Position"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                          value={position}
                          readonly
                        />
                      </div>
                    ) : (
                      <div class="col-lg-9">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Enter New Position"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                          value={position}
                          onChange={(e) => setposition(e.target.value)}
                        />
                      </div>
                    )}
                    {editposition === false ? (
                      <div class="col-lg-1">
                        <a class="pencil" onClick={() => seteditposition(true)}>
                          <ion-icon
                            style={{ color: "#955F61" }}
                            size="large"
                            name="create-outline"
                          ></ion-icon>
                        </a>
                      </div>
                    ) : (
                      <div className="col-lg-1 input-group-append">
                        <button
                          className="btn"
                          type="button"
                          id="button-addon2"
                          onClick={() => {
                            seteditposition(false);
                            setposition(position);
                            updateposition(position)
                          }}
                        >
                          Save
                        </button>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminProfile;