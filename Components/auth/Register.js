import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
import firebase from "firebase";
import "firebase/auth";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { name, email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
          placeholder="name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(password) => this.setState({ password })}
        />
        <Button title="Sign Up" onPress={() => this.onSignUp()} />
      </View>
    );
  }
}

export default Register;
