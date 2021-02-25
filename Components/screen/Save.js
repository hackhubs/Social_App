import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Image, Button } from "react-native-elements";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-storage";

function Save(props) {
  console.log(props.route.params.image);
  const [caption, setCaption] = useState("");
  const UploadImage = async () => {
    const uri = props.route.params.image;

    const childPath = `post/${
      firebase.auth().currentUser.uid
    }/${Math.random().toString(36)}`;
    console.log(childPath);

    const response = await fetch(uri);

    const blob = await response.blob(); //it will create the blob of uri which is pass along firestore then upload image

    const task = firebase.storage().ref().child(childPath).put(blob); // it will upload the images to tthe storage

    //to know the process of uploading the image

    const taskProgress = (snapshot) => {
      console.log(`transferred: ${snapshot.bytesTransferred}`); // to check how much is uploaded
    };

    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        //to get the download url which is public available to show the image uploaded
        console.log(snapshot);
      });
    };

    const taskError = (snapshot) => {
      //to check the error
      console.log(snapshot);
    };

    task.on("state_change", taskProgress, taskError, taskCompleted); // This should be called in proper order i.e progress => error => completed when the state changes these tasks get activated
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: props.route.params.image }} />
      <Input
        placeholder="Write a Caption..."
        onChangeText={(caption) => setCaption(caption)}
      />
      <Button title="Save" onPress={() => UploadImage()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Save;
