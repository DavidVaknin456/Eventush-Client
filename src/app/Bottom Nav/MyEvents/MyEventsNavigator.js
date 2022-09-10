import TopTab from "../../utils/TopTab";
import { PendingEvents } from "./PendingEvents";
import { ApprovedEvents } from "./ApprovedEvents";

export default MyEventsNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Pending" component={PendingEvents} />
      <TopTab.Screen name="Approved" component={ApprovedEvents} />
    </TopTab.Navigator>
  );
};
