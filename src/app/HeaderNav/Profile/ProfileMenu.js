import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";

export default ProfileMenu = ({ navigation: { navigate } }) => {
  const uri =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIsli7rxCwvZ8BNVEum9Oq-jJQ902e5IdgNLbMvkEPg&s";

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
            margin: 10,
          }}
          source={{ uri: uri }}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("Edit Profile")}
      >
        <Text>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("Settings")}
      >
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});
