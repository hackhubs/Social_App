import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
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
      <View style={styles.container}>
        <TextInput
          placeholder="name"
          style={styles.text}
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="email"
          style={styles.text}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          style={styles.text}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button title="Sign Up" onPress={() => this.onSignUp()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    fontsize: 20,
    padding: 20,
    marginTop: 10,
  },
});

export default Register;
