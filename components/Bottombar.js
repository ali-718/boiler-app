import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "native-base";

export default class Bottombar extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: 50,
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
          style={{
            width: "33%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="home" type="AntDesign" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Wishlist")}
          style={{
            width: "33%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="hearto" type="AntDesign" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Cart")}
          style={{
            width: "33%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="shoppingcart" type="AntDesign" />
        </TouchableOpacity>
      </View>
    );
  }
}
