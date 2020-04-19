import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class MyParagraph extends Component {
  render() {
    return (
      <View style={{ width: "100%", padding: 10 }}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={this.props.image}
        />
        <Text style={{ marginTop: 20, textAlign: "center" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Text>
      </View>
    );
  }
}
