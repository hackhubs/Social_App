import React from "react";
import { View, StyleSheet, Button } from "react-native";

function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        style={styles.button}
        title="Register"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Landing;
