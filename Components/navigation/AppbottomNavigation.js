import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import firebase from "firebase/app";
import "firebase/auth";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import feed from "../screen/feed";
import Profile from "../screen/Profile";
import Search from "../screen/Search";

const Tab = createBottomTabNavigator();

const EmptyScreen = () => {
  return null;
};

function AppbottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        inactiveTintColor: "black",
        activeTintColor: "#e91e63",
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={feed}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-search-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AddContainer"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={30}
            />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate("Add");
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={30}
            />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate("Profile", {
              uid: firebase.auth().currentUser.uid,
            });
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default AppbottomNavigation;
