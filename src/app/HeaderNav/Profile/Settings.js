import React, { useContext } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { UserContext } from "../../utils/UserContext";

export default Settings = ({ navigation }) => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <View style={styles.item}>
        <Text>uid: {user["uid"]}</Text>
      </View>
      <Text style={styles.title}>Notifications</Text>
      <TouchableOpacity
        style={styles.item}
        onPress={() => Alert.alert("Notification is on/off")}
      >
        <Text>Alert y/n</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Policy</Text>
      <TouchableOpacity
        style={styles.item}
        onPress={() => Alert.alert("Those are the terms of use ")}
      >
        <Text>Terms of use</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => Alert.alert("Privacy settings")}
      >
        <Text>Privacy</Text>
      </TouchableOpacity>

      <Pressable
        style={styles.button}
        onPress={() => Alert.alert("Account Deleted")}
      >
        <Text style={styles.text}>Delete Account</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#d3d3d3",
    padding: 17,
    marginVertical: 8,
    borderRadius: 6,
  },
  title: {
    fontSize: 20,
    padding: 5,
  },
  button: {
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "black",
    position: "absolute",
    bottom: 45,
    width: "84.9%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
