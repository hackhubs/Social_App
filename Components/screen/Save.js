import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Image, Button } from "react-native-elements";

const [caption, setCaption] = useState("");

function Save(props) {
  console.log(props.route.params.image);

  return (
    <View style={styles.container}>
      <Image source={{ uri: props.route.params.image }} />
      <Input
        placeholder="Write a Caption..."
        onChangeText={(caption) => setCaption(caption)}
      />
      <Button title="Save" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Save;
