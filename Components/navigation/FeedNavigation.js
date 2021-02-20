import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../Main";
import AddImage from "../screen/AddImage";
import Save from "../screen/Save";

const Stack = createStackNavigator();

function FeedNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Add" component={AddImage} />
        <Stack.Screen name="Save" component={Save} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default FeedNavigation;
