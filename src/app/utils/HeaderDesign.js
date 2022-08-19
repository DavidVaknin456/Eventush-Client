import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, StyleSheet, Text, TouchableHighlight } from "react-native";

const styleMyEventsHeader = {
  headerTitle: () => appTitle,
  headerRight: () => filterButton,
  headerLeft: () => ProfileButton,
  headerStyle: {
    backgroundColor: "#ff69b4",
  },
  tabBarLabel: " Personal Events",
  tabBarIcon: () => (
    <FontAwesome name="calendar-check-o" color={colors.black} size={23} />
  ),
};

const styleEventsHeader = {
  headerTitle: () => appTitle,
  headerRight: () => filterButton,
  headerLeft: () => ProfileButton,
  headerStyle: {
    backgroundColor: "#7fff00",
  },
  tabBarLabel: "Events",
  tabBarIcon: () => (
    <AntDesign name="appstore-o" color={colors.black} size={23} />
  ),
};
const styleChatHeader = {
  headerTitle: () => appTitle,
  headerRight: () => filterButton,
  headerLeft: () => ProfileButton,
  headerStyle: {
    backgroundColor: "#ffa07a",
  },
  tabBarLabel: "Chat",
  tabBarIcon: () => (
    <Ionicons name="chatbubble-outline" color={colors.black} size={23} />
  ),
};

const ProfileButton = (
  <TouchableHighlight
    // style={styles.container}
    onPress={() => alert("This is a button!")}
  >
    <Image
      style={{
        width: 32,
        height: 32,
        margin: 10,
      }}
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIsli7rxCwvZ8BNVEum9Oq-jJQ902e5IdgNLbMvkEPg&s",
      }}
    />
  </TouchableHighlight>
);

const filterButton = (
  <TouchableHighlight onPress={() => alert("Filter button!")}>
    <AntDesign name="filter" color={colors.black} size={23} />
  </TouchableHighlight>
);
const appTitle = <Text>Eventush</Text>;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export { styleMyEventsHeader, styleEventsHeader, styleChatHeader };
