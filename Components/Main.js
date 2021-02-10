import React, { Component } from "react";
import { View, Text, Button } from "react-native";
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
        <Button title="Log out" onPress={() => this.onSignOut()} />
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
