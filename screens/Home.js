import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Bottombar from "../components/Bottombar";

export default class Home extends Component {
  state = {
    Products: [
      {
        Name: "Iphone X",
        Price: 85000,
        description:
          "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin",
        Image:
          "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg",
      },
      {
        Name: "Iphone 11 Pro max",
        Price: 85000,
        description:
          "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin",
        Image:
          "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg",
      },
      {
        Name: "Samsung S20",
        Price: 85000,
        description:
          "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin",
        Image:
          "https://cdn.pixabay.com/photo/2015/01/20/13/13/ipad-605439_960_720.jpg",
      },
      {
        Name: "oppo f5",
        Price: 85000,
        description:
          "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin",
        Image:
          "https://cdn.pixabay.com/photo/2016/03/27/19/43/smartphone-1283938_960_720.jpg",
      },
    ],
  };

  render() {
    return (
      <SafeAreaView style={{ width: "100%", flex: 1 }}>
        <ScrollView style={{ width: "100%", flex: 1 }}>
          <ScrollView
            horizontal
            style={{ width: Dimensions.get("window").width, height: 300 }}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            <Image
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2016/03/27/19/43/smartphone-1283938_960_720.jpg",
              }}
              style={{ width: Dimensions.get("window").width, height: 300 }}
            />
            <Image
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2015/01/20/13/13/ipad-605439_960_720.jpg",
              }}
              style={{ width: Dimensions.get("window").width, height: 300 }}
            />
            <Image
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg",
              }}
              style={{ width: Dimensions.get("window").width, height: 300 }}
            />
          </ScrollView>

          {/* Products start */}
          <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
            {this.state.Products.map((item) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Description", {
                    product: item,
                  })
                }
                style={{
                  width: "90%",
                  backgroundColor: "white",
                  alignItems: "center",
                  marginTop: 20,
                  borderRadius: 20,
                  padding: 20,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,
                  elevation: 7,
                }}
              >
                <Image
                  source={{
                    uri: item.Image,
                  }}
                  style={{
                    width: "100%",
                    height: 200,
                    marginTop: 20,
                    borderRadius: 20,
                  }}
                />
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}
                >
                  {item.Name}
                </Text>
                <Text
                  style={{ fontSize: 17, fontWeight: "400", marginTop: 20 }}
                >
                  Buy for only Rs.{item.Price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Products End */}
        </ScrollView>
        <Bottombar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
