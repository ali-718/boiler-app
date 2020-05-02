import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./screens/Home";
import About from "./screens/About";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          }}
        >
          <Stack.Screen
            options={{ headerShown: true, title: "My Home" }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="About"
            component={About}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
