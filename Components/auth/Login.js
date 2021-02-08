import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
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
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
          style={styles.text}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(password) => this.setState({ password })}
          style={styles.text}
        />
        <Button title="Sign In" onPress={() => this.onSignUp()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  text: {
    padding: 10,
    fontsize: 20,
  },
});

export default Login;
