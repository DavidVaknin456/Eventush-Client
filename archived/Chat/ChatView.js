import { Card } from "react-native-paper";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const ChatView = ({ navigation }) => {
  return (
    <SafeAreaView style={chatStyles.container}>
      <ScrollView>
        <ChatCard navigation={navigation} />
        <ChatCard navigation={navigation} />
        <ChatCard navigation={navigation} />
        <ChatCard navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const ChatCard = ({ navigation }) => {
  return (
    <TouchableHighlight onPress={() => navigation.navigate("Conversation")}>
      <Card>
        <View style={chatStyles.row}>
          <Image
            source={{ uri: "https://picsum.photos/700" }}
            style={{
              width: 70,
              height: 70,
            }}
          />
          <Text style={chatStyles.text}>Soccer Group</Text>
        </View>
      </Card>
    </TouchableHighlight>
  );
};

const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
});

export { ChatView, ChatCard };
