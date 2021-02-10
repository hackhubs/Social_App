import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text h2Style={styles.text} h2>
        Welcome to our App
      </Text>
      <Button
        icon={<MaterialCommunityIcons name="account" size={30} color="white" />}
        title="Register"
        containerStyle={styles.button}
        buttonStyle={{ backgroundColor: "#18e761" }}
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        icon={<MaterialCommunityIcons name="login" size={30} color="white" />}
        title="Login"
        containerStyle={styles.button}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 180,
  },

  text: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 40,
  },
  button: {
    padding: 20,
  },
});

export default Landing;
