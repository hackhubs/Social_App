import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import Octicons from "react-native-vector-icons/Octicons";
import firebase from "firebase/app";
import "firebase/auth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "./redux/actions";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  onSignOut() {
    firebase
      .auth()
      .signOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { currentUser } = this.props;

    if (currentUser === undefined) {
      return <View></View>;
    }
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{currentUser.name} is logged in</Text>
        <Text>{currentUser.email}</Text>
        <Button
          icon={<Octicons name="sign-out" size={30} color="white" />}
          title=" Sign Out"
          containerStyle={{ padding: 15 }}
          onPress={() => this.onSignOut()}
        />
      </View>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
