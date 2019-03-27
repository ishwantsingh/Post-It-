import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAV3LhGcRjytMOQrrzRnaKTt2z9GhBVNQg",
  authDomain: "post-it-8.firebaseapp.com",
  databaseURL: "https://post-it-8.firebaseio.com",
  projectId: "post-it-8",
  storageBucket: "post-it-8.appspot.com",
  messagingSenderId: "222331970603"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
