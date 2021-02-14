import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import feed from "../screen/feed";
import AddImage from "../screen/AddImage";
import Profile from "../screen/Profile";

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
  return null;
};

function AppbottomNavigation(props) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Profile"
        tabBarOptions={{
          inactiveTintColor: "black",
          activeTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Feed"
          component={feed}
          options={{
            tabBarLabel: "Feed",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AddContainer"
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Add");
            },
          })}
          component={EmptyScreen}
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
