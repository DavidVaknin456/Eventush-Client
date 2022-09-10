import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default EditProfile = ({ navigation }) => {
  const uri =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIsli7rxCwvZ8BNVEum9Oq-jJQ902e5IdgNLbMvkEPg&s";

  return (
    <View style={modalStyles.container}>
      <View style={modalStyles.ProfileImages}>
        <Image style={modalStyles.image} source={{ uri: uri }} />
        <Image style={modalStyles.image} source={{ uri: uri }} />
      </View>
      <View style={{ margin: 70 }}>
        <Text style={modalStyles.text}>Edit Preferences</Text>
        <Text style={modalStyles.text}>Edit Details </Text>
      </View>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  ProfileImages: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  image: {
    width: 150,
    height: 150,
    margin: 1,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    padding: 10,
  },
});
