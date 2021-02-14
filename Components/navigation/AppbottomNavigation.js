import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Main from "../Main";
import feed from "../screen/feed";
import AddImage from "../screen/AddImage";
import Profile from "../screen/Profile";

const Tab = createBottomTabNavigator();
function AppbottomNavigation(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          inactiveTintColor: "black",
          activeTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Main}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Feed"
          component={feed}
          options={{
            tabBarLabel: "Feed",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="image-search"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddImage}
          options={{
            tabBarLabel: "Image",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-box"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppbottomNavigation;
