import React, { Component } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { Icon } from "native-base";
import Bottombar from "../components/Bottombar";
import { connect } from "react-redux";

class Wishlist extends Component {
  render() {
    return (
      <SafeAreaView style={{ width: "100%", flex: 1, alignItems: "center" }}>
        {this.props.products.WishList.length > 0 ? (
          <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
            {this.props.products.WishList.map((item) => (
              <View
                style={{
                  width: "90%",
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Image
                  style={{ width: 100, height: 100, borderRadius: 20 }}
                  source={{ uri: item.Image }}
                />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}
                  >
                    {item.Name}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View
            style={{
              width: "100%",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="hearto" type="AntDesign" style={{ fontSize: 30 }} />
            <Text style={{ marginTop: 20 }}>No items in your wishlist</Text>
          </View>
        )}

        <Bottombar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Wishlist);
