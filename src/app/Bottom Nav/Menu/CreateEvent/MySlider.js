import { Text, View, StyleSheet } from "react-native";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import styles from "react-native-webview/lib/WebView.styles";

export default MySlider = ({
  minMembers,
  setMinMembers,
  maxMembers,
  setMaxMembers,
}) => {
  return (
    <View>
      <View style={modalStyles.container}>
        <Text style={modalStyles.text}>Min Members: </Text>
        <Text style={modalStyles.text}>Max Members</Text>
      </View>
      <View style={modalStyles.container}>
        <NumericInput
          value={minMembers}
          minValue={2}
          maxValue={10}
          onChange={(value) => {
            setMinMembers(value);
            setMaxMembers(value);
            console.log("min: ", minMembers);
          }}
        />
        <NumericInput
          value={maxMembers}
          minValue={minMembers}
          maxValue={10}
          onChange={(value) => {
            setMaxMembers(value);
            console.log("max: ", maxMembers);
          }}
        />
      </View>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    padding: 10,
    marginTop: 15,
  },
});
