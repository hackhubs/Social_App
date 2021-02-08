import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome to Our App</Text>
      <Button
        style={styles.button}
        title="Register"
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        style={styles.button}
        title="Login"
        color="#11eebc"
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    margin: 10,
  },
  button: {
    padding: 10,
    marginTop: 10,
  },
  text: {
    fontsize: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default Landing;
