import {
  Button,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { useCallback, useState } from "react";
import useGetAdminEvents from "./util/useGetAdminEvents";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../utils/UserContext";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default AdminEvents = () => {
  const [refresh, setRefresh] = useState(false);
  const { getAdminEvents, adminEvents } = useGetAdminEvents();
  const { token } = useContext(UserContext);

  const closeRegistration = async (item) => {
    console.log("closeRegistration");
    // add my uid to members
    // const url = "http://localhost:3000/closeRegistration";
    const url =
      "https://intelligent-livre-26497.herokuapp.com/closeRegistration";
    const authHeader = { Authorization: `Basic ${token}` };
    const options = {
      method: "PUT",
      data: item,
      headers: authHeader,
      url: url,
    };
    await axios(options)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
        console.log("add event failed");
      });
  };
  const deleteEvent = async (id) => {
    console.log("deleteEvent");
    // add my uid to members
    // const url = "http://localhost:3000/deleteEvent";
    const url = "https://intelligent-livre-26497.herokuapp.com/deleteEvent";
    const authHeader = { Authorization: `Basic ${token}` };
    const data = {
      id: id,
    };
    const options = {
      method: "DELETE",
      data: data,
      headers: authHeader,
      url: url,
    };
    await axios(options)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
        console.log("delete event failed");
      });
  };

  const onRefresh = useCallback(() => {
    setRefresh(true);
    wait(1000).then(() => setRefresh(false));
    console.log("refresh");
    getAdminEvents();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      >
        <FlatList
          data={adminEvents}
          renderItem={({ item }) => (
            <View>
              <Card>
                <Card.Content>
                  <Title>{item["category"]}</Title>
                  <Paragraph>
                    Date: {item["date"]}________Location: {item["location"]}
                  </Paragraph>
                  <Text>Description:____{item["description"]}</Text>
                  <Text>num of members:______{item["members"].length}</Text>
                  <Text>orgID:_____{item["orgID"]}</Text>
                </Card.Content>
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                <Card.Actions>
                  <Button
                    title={"Close registration"}
                    onPress={() => {
                      closeRegistration(item);
                    }}
                  />
                  <Button
                    title={"Delete Event"}
                    onPress={() => {
                      deleteEvent(item["_id"]);
                    }}
                  />
                </Card.Actions>
              </Card>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});
