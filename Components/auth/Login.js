import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import Octicons from "react-native-vector-icons/Octicons";
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
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Input
          placeholder=" Email"
          leftIcon={{ type: "MaterialCommunityIcons", name: "email" }}
          textContentType="emailAddress"
          onChangeText={(email) => this.setState({ email })}
        />

        <Input
          placeholder=" Password"
          leftIcon={{ type: "MaterialCommunityIcons", name: "lock-outline" }}
          secureTextEntry
          textContentType="password"
          onChangeText={(password) => this.setState({ password })}
        />

        <Button
          icon={<Octicons name="sign-in" size={30} color="white" />}
          title="  Sign In"
          containerStyle={{ padding: 15 }}
          onPress={() => this.onSignUp()}
        />
        <Text>
          Don't have an account
          <Text
            style={{ color: "#788eec", fontWeight: "bold", fontSize: 16 }}
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "white",
  },
});

export default Login;
