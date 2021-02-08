import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
import firebase from "firebase";
import "firebase/auth";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(password) => this.setState({ password })}
        />
        <Button title="Sign In" onPress={() => this.onSignUp()} />
      </View>
    );
  }
}

export default Login;
