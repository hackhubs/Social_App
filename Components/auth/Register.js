import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import Octicons from "react-native-vector-icons/Octicons";
import firebase from "firebase";
import "firebase/auth";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      password: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { name, email, password, phone } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            phone,
            email,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Input
          leftIcon={{ type: "font-awesome", name: "user-o" }}
          placeholder=" Name"
          textContentType="name"
          onChangeText={(name) => this.setState({ name })}
        />
        <Input
          placeholder=" Email"
          leftIcon={{ type: "MaterialCommunityIcons", name: "email" }}
          textContentType="emailAddress"
          onChangeText={(email) => this.setState({ email })}
        />
        <Input
          placeholder=" Phone Number"
          leftIcon={{
            type: "MaterialCommunityIcons",
            name: "contacts",
          }}
          textContentType="telephoneNumber"
          onChangeText={(phone) => this.setState({ phone })}
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
          title="  Sign Up"
          containerStyle={{ padding: 15 }}
          onPress={() => this.onSignUp()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "white",
  },
});

export default Register;
