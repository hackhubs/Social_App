import React, { Component } from "react";
import { View, Text } from "react-native";

import "firebase/auth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "./redux/actions";
import AppbottomNavigation from "./navigation/AppbottomNavigation";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return <AppbottomNavigation />;
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
