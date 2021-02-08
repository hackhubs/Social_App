import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../auth/Landing";
import Register from "../auth/Register";
import Login from "../auth/Login";

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <NavigationContainer initialRouteName="Landing">
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigation;
