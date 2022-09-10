import { Card, Paragraph, Title } from "react-native-paper";
import { useCallback, useState } from "react";
import useGetApprovedEvents from "./util/UseGetApprovedEvents";
import {
  Alert,
  Button,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DesignModal from "../DesignModal";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const ApprovedEvents = () => {
  const [refresh, setRefresh] = useState(false);
  const { getApprovedEvents, approvedEvents } = useGetApprovedEvents();
  const [isModalVisible, setModalVisible] = useState(false);
  const [eventDetails, setEventDetails] = useState([""]);

  const onRefresh = useCallback(() => {
    setRefresh(true);
    wait(1000).then(() => setRefresh(false));
    console.log("refresh");
    getApprovedEvents();
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
          data={approvedEvents}
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
                    title={"Remove"}
                    onPress={() => Alert.alert("Event denied")}
                  />
                  {isModalVisible === true ? (
                    <DesignModal
                      setModalVisible={setModalVisible}
                      isModalVisible={isModalVisible}
                      eventDetails={eventDetails}
                    />
                  ) : (
                    <Button
                      title={"Details"}
                      onPress={() => {
                        setModalVisible(true);
                        setEventDetails([
                          "orgID:  " + item["orgID"],
                          "category:  " + item["category"],
                          "date:  " + item["date"],
                          "location:  " + item["location"],
                          "isEventApproved:  " +
                            String(item["isEventApproved"]),
                          "members:  " + item["members"],
                        ]);
                      }}
                    />
                  )}
                </Card.Actions>
              </Card>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export { ApprovedEvents };

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
