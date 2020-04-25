import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let fireStoreDB;
try {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDgsVmF-QsudNyc6qJYta2aVOLvZ08uUCA",
    authDomain: "selfscrum-55641.firebaseapp.com",
    databaseURL: "https://selfscrum-55641.firebaseio.com",
    projectId: "selfscrum-55641",
    storageBucket: "selfscrum-55641.appspot.com",
    messagingSenderId: "264870908760",
    appId: "1:264870908760:web:a01dfee2fd4632ac9d8b2d"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  fireStoreDB = firebase.firestore();
} catch (error) {
  console.warn('--== Multiple Firebase Instance ', error, firebase.apps);
}

console.warn('--== Firebase Instance ', fireStoreDB, firebase);
export {
  fireStoreDB,
  firebase
};
