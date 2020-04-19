import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import MyParagraph from "./MyParagraph";
import Forms from "./Forms";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={{ marginTop: StatusBar.currentHeight, width: "100%", flex: 1 }}
      >
        <ScrollView>
          <Forms />
          {/* <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>A</Text>
          </View>
          <View
            style={{
              width: "60%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Search</Text>
          </View>
          <View
            style={{
              width: "20%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>B</Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", flex: 1 }}
        >
          <ScrollView
            horizontal={true}
            style={{ width: Dimensions.get("window").width, height: 300 }}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
          >
            <Image
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2020/02/14/10/52/frankfurt-4848202_960_720.jpg",
              }}
              style={{
                width: Dimensions.get("window").width,
                height: 300,
              }}
            />

            <Image
              source={require("./assets/pool.jpg")}
              style={{
                width: Dimensions.get("window").width,
                height: 300,
              }}
            />

            <Image
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2020/02/14/10/52/frankfurt-4848202_960_720.jpg",
              }}
              style={{
                width: Dimensions.get("window").width,
                height: 300,
              }}
            />
          </ScrollView>

          <Text> textInComponent </Text>
          <Image
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2020/02/14/10/52/frankfurt-4848202_960_720.jpg",
            }}
            style={{ width: "100%", height: 300 }}
          /> */}

          {/* <Image
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2020/02/14/10/52/frankfurt-4848202_960_720.jpg",
            }}
            style={{ width: "100%", height: 300, marginTop: 50 }}
          /> */}

          {/* <Image
            source={require("./assets/pool.jpg")}
            style={{ width: "100%", height: 300, marginTop: 50 }}
          /> */}
          {/* 
          <Image
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2020/02/14/10/52/frankfurt-4848202_960_720.jpg",
            }}
            style={{ width: "100%", height: 300, marginTop: 50 }}
          /> */}
          {/* <View style={{ marginTop: 50 }}></View>
          <MyParagraph image={require("./assets/pool.jpg")} /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
