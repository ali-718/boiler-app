import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { Icon } from "native-base";

export default class About extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
          }}
        >
          <Icon
            name="ios-arrow-dropleft-circle"
            type="Ionicons"
            style={{ color: "blue" }}
          />
          <Text style={{ marginLeft: 10 }}>Back</Text>
        </TouchableOpacity>
      ),
    });
  }

  render() {
    return (
      <View>
        <Text> About </Text>
        <Button
          title="go Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
