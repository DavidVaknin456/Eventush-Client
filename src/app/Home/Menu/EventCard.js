import useGetEvents from "./util/useGetEvents";
import { Alert, Button, FlatList, Text, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export default EventCard = () => {
  const { events } = useGetEvents();

  return (
    <FlatList
      data={events}
      renderItem={({ item }) => (
        <View>
          <Card>
            <Card.Content>
              <Title>{item["category"]}</Title>
              <Paragraph>
                {item["date"]}: {item["location"]}
              </Paragraph>
              <Text>{item["description"]}</Text>
              <Text>
                {/*{item["members"][0]}: {item["members"][1]}*/}---members---
              </Text>
            </Card.Content>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
              <Button
                title={"Accept"}
                onPress={() => Alert.alert("Event approved")}
              />
              <Button
                title={"Deny"}
                onPress={() => Alert.alert("Event denied")}
              />
            </Card.Actions>
          </Card>
        </View>
      )}
    />
  );
};
