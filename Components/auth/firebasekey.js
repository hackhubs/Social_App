import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzU6laCbAwQ3_LNrCffkiQOwCIRGfSRmo",
  authDomain: "instagram-dev-866ba.firebaseapp.com",
  projectId: "instagram-dev-866ba",
  storageBucket: "instagram-dev-866ba.appspot.com",
  messagingSenderId: "1011579615299",
  appId: "1:1011579615299:web:2c8bd3ff04830495f23cf6",
  measurementId: "G-PQJWDBLQQ7",
};

if (firebase.apps.length === 0) {
  firebase.initialApp(firebaseConfig);
}
