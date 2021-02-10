import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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
          textContentType="emailAddress"
          name="email"
          onChangeText={(email) => this.setState({ email })}
          style={styles.text}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          secureTextEntry
          textContentType="password"
          name="password"
          style={styles.text}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button
          icon={<FontAwesome name="sign-in" size={30} color="white" />}
          title="  Sign In"
          onPress={() => this.onSignUp()}
        />
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
    fontSize: 20,
  },
});

export default Login;
