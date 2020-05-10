import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Icon } from "native-base";
import Bottombar from "../components/Bottombar";

export default class Cart extends Component {
  render() {
    return (
      <SafeAreaView style={{ width: "100%", flex: 1 }}>
        <View
          style={{
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="shoppingcart" type="AntDesign" style={{ fontSize: 30 }} />
          <Text style={{ marginTop: 20 }}>No items in your cart</Text>
        </View>
        <Bottombar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
