// FOR FIREBASE INTEGRATION ADD THESE TWO LINES AT THE END OF THE BODY
//  <script src="https://www.gstatic.com/firebasejs/${JSCORE_VERSION}/firebase.js"></script>
// <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-database.js"></script>
// <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-firestore.js"></script>

// ADD THIS LINE AFTER CHANGING IN ANY FILE USING THE CLASS FROM THIS JS FILE
// import firebase_integration from '../Fire.js'
// change the directory according to your need


import React, { Component } from 'react';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCoI_Hy_IJsXqDp_CtkdD1K81sqvTnzx7E",
  authDomain: "khana-shana-2020.firebaseapp.com",
  databaseURL: "https://khana-shana-2020.firebaseio.com",
  projectId: "khana-shana-2020",
  storageBucket: "khana-shana-2020.appspot.com",
  messagingSenderId: "734527584801",
  appId: "1:734527584801:web:f6cda3a79788e9af12c160",
  measurementId: "G-SC8N0VD5FC"
};

class firebase_integration extends Component {
  constructor() {
      super()
      firebase.initializeApp(firebaseConfig);
      this.database = firebase.firestore();
      this.storage = firebase.storage();
  }

  getImageURL(divID, mainreferencefolder, path, imagename) {
    this.storage.ref(mainreferencefolder).child(path+'/'+imagename).getDownloadURL().then(function(url) {
      document.getElementById(divID).src = url;
    });
  }

  updateOrderQueueTracking(orderid, to){
    this.storage.ref('RegularOrder').where("OrderID", "==", orderid).update({
      Tracking : to
    })
  updateOrderQueueAction(orderid, to){
    this.storage.ref('RegularOrder').where("OrderID", "==", orderid).update({
      Action : to
    })
  }
}

export default new firebase_integration();