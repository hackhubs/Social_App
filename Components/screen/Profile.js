import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import Octicons from "react-native-vector-icons/Octicons";

const onSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
function Profile(props) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        icon={<Octicons name="sign-out" size={30} color="white" />}
        title=" Sign Out"
        containerStyle={{ padding: 15 }}
        onPress={onSignOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
