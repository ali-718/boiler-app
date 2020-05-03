import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default class Descriptions extends Component {
  componentDidMount() {
    const Product = this.props.route.params.product;

    console.log(Product);
  }

  render() {
    return (
      <View style={{ width: "100%", flex: 1 }}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{ uri: this.props.route.params.product.Image }}
        />

        <View style={{ width: "100%", marginTop: 30, padding: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {this.props.route.params.product.Name}
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 15, marginTop: 10 }}>
            {this.props.route.params.product.description}
          </Text>

          <TouchableOpacity
            style={{
              width: "100%",
              height: 50,
              borderRadius: 20,
              backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white" }}>
              Buy Now for Rs.{this.props.route.params.product.Price}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
