import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> Home </Text>

        <Button
          title="go to about"
          onPress={() => this.props.navigation.navigate("About")}
        />
      </View>
    );
  }
}
