import React from "react";
import { View, StyleSheet, Text } from "react-native";

function feed(props) {
  return (
    <View style={styles.container}>
      <Text>Feed screen</Text>
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

export default feed;
