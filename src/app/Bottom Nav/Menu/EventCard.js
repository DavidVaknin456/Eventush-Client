import useGetEvents from "./util/useGetEvents";
import { Alert, Button, FlatList, Text, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../utils/UserContext";
import DesignModal from "../DesignModal";

export default EventCard = () => {
  const { events } = useGetEvents();
  const { token } = useContext(UserContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [eventDetails, setEventDetails] = useState([""]);

  const addToMyEvents = async (item) => {
    console.log("addMember");
    // add my uid to members
    // const url = "http://localhost:3000/addMember";
    const url = "https://intelligent-livre-26497.herokuapp.com/addMember";
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

  return (
    <FlatList
      data={events}
      renderItem={({ item }) => (
        <View>
          <Card>
            <Card.Content>
              <Title>{item["category"]}</Title>
              <Paragraph>
                Date: {item["date"]}__:__Location: {item["location"]}
              </Paragraph>
              <Text>Description:____{item["description"]}</Text>
              <Text>num of members:______{item["members"].length}</Text>
              <Text>orgID:_____{item["orgID"]}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
              <Button
                title={"Accept Event"}
                onPress={() => {
                  addToMyEvents(item);
                }}
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
                      "isEventApproved:  " + String(item["isEventApproved"]),
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
  );
};
