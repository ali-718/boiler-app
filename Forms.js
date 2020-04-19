import React, { Component } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";

export default class Forms extends Component {
  state = {
    Name: "Ali Haider",
  };

  render() {
    return (
      <View style={{ width: "100%", alignItems: "center" }}>
        <TextInput
          placeholder="Name"
          style={{
            width: "80%",
            height: 40,
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid",
            borderRadius: 10,
            paddingLeft: 10,
          }}
          onChangeText={(val) => this.setState({ Name: val })}
          value={this.state.Name}
          placeholderTextColor="gray"
        />

        {/* <Text style={{ marginTop: 20 }}>{this.state.Name}</Text> */}

        <Button title="Press Me" onPress={() => alert(this.state.Name)} />

        <TouchableOpacity
          onPress={() => alert(this.state.Name)}
          style={{
            width: 100,
            height: 40,
            backgroundColor: "red",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Press</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
