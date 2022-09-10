import React from "react";
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const DATA = [
  {
    title: "Account",
    data: ["dav@gmail.com"],
  },
  {
    title: "Edit",
    data: ["+972-53-234  ..."],
  },
  {
    title: "Notifications",
    data: ["Alert y/n"],
  },
  {
    title: "Policy",
    data: ["Terms of use", "Privacy"],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
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
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#d3d3d3",
    padding: 17,
    marginVertical: 8,
    borderRadius: 8,
  },
  header: {
    fontSize: 27,
  },
  title: {
    fontSize: 18,
  },
  button: {
    marginHorizontal: 16,
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
