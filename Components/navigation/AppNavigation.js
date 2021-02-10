import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../redux/reducers";
import AuthNavigation from "./AuthNavigation";
import MainScreen from "../Main";
import AppbottomNavigation from "./AppbottomNavigation";

const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
  apiKey: "AIzaSyAzU6laCbAwQ3_LNrCffkiQOwCIRGfSRmo",
  authDomain: "instagram-dev-866ba.firebaseapp.com",
  projectId: "instagram-dev-866ba",
  storageBucket: "instagram-dev-866ba.appspot.com",
  messagingSenderId: "1011579615299",
  appId: "1:1011579615299:web:2c8bd3ff04830495f23cf6",
  measurementId: "G-PQJWDBLQQ7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export class AppNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Loading...</Text>
        </View>
      );
    }
    if (!loggedIn) {
      return <AuthNavigation />;
    }
    return (
      <Provider store={store}>
        <AppbottomNavigation />
      </Provider>
    );
  }
}

export default AppNavigation;
