import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Image, FlatList } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Octicons from "react-native-vector-icons/Octicons";
import { connect } from "react-redux";

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
  const [userPost, setUserPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { currentUser, posts } = props;
    console.log({ currentUser, posts });

    if (props.route.params.uid === firebase.auth().currentUser.uid) {
      setUser(currentUser);
      setUserPosts(posts);
    } else {
      firebase
        .firestore()
        .collection("users")
        .doc(props.route.params.uid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            setUser(snapshot.data());
          } else {
            console.log("does not exist");
          }
        });
      firebase
        .firestore()
        .collection("posts")
        .doc(props.route.params.uid)
        .collection("userPosts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot) => {
          let posts = snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
          // console.log(posts);
          setUserPosts(posts);
        });
    }
  }, [props.route.params.uid]);

  if (user === null) {
    return <View />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.infouser}>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </View>
      <View style={styles.galleryContainer}>
        <FlatList
          numColumns={3}
          horizontal={false}
          data={userPost}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.downloadURl }} style={styles.image} />
            </View>
          )}
        />
      </View>
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
    marginTop: 40,
  },
  infouser: {
    marginTop: 20,
  },
  galleryContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1 / 3,
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
  },
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  posts: store.userState.posts,
});

export default connect(mapStateToProps, null)(Profile);
