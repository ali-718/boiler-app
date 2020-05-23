import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { AddToWishlist, DeleteFromWishlist } from "../actions/productsActions";

class Descriptions extends Component {
  componentDidMount() {
    const Product = this.props.route.params.product;

    console.log(Product);
  }

  render() {
    return (
      <View style={{ width: "100%", flex: 1 }}>
        {console.log(this.props.products)}
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
          {this.props.products.WishList.filter((item) => {
            return item.Name == this.props.route.params.product.Name;
          }).length > 0 ? (
            <TouchableOpacity
              onPress={() =>
                this.props.DeleteFromWishlist(this.props.route.params.product)
              }
              style={{
                width: "100%",
                height: 50,
                borderRadius: 20,
                backgroundColor: "tomato",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white" }}>Delete from wishlist</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                this.props.AddToWishlist(this.props.route.params.product)
              }
              style={{
                width: "100%",
                height: 50,
                borderRadius: 20,
                backgroundColor: "tomato",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white" }}>Add to wishlist</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { AddToWishlist, DeleteFromWishlist })(
  Descriptions
);
