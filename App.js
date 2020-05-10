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
import Descriptions from "./screens/Descriptions";
import Wishlist from "./screens/Wishlist";
import Cart from "./screens/Cart";
import { Provider } from "react-redux";
import store from "./store";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              headerStyleInterpolator: HeaderStyleInterpolators.forSlideRight,
            }}
          >
            <Stack.Screen
              options={{ headerShown: true, title: "Ecommerce" }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{ headerShown: false, title: "Ecommerce" }}
              name="Wishlist"
              component={Wishlist}
            />
            <Stack.Screen
              options={{ headerShown: false, title: "Ecommerce" }}
              name="Cart"
              component={Cart}
            />

            <Stack.Screen
              options={{ headerShown: true }}
              name="Description"
              component={Descriptions}
            />
            <Stack.Screen
              options={{ headerShown: true }}
              name="About"
              component={About}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
