import { Alert, Button, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import TopTab from "../../utils/TopTab";

const MyEventTab = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Pending" component={PendingEvents} />
      <TopTab.Screen name="Approved" component={ApprovedEvents} />
    </TopTab.Navigator>
  );
};

const PendingEvents = () => {
  return (
    <View>
      <Card>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button
            title={"View Event"}
            onPress={() => Alert.alert("View Event")}
          />
          <Button
            title={"Cancel you registration"}
            onPress={() => Alert.alert("your registration is canceled")}
          />
        </Card.Actions>
      </Card>
    </View>
  );
};

const ApprovedEvents = () => {
  return (
    <View>
      <Card>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button
            title={"View Event"}
            onPress={() => Alert.alert("Event approved")}
          />
          <Button
            title={"Cancel you registration"}
            onPress={() => Alert.alert("Event denied")}
          />
        </Card.Actions>
      </Card>
    </View>
  );
};

export { PendingEvents, ApprovedEvents, MyEventTab };
