import MenuNavigator from "../Home/Menu/MenuNavigator";
import { MyEventTab } from "../Home/MyEvents/MyEventTab";
import BottomTab from "../utils/BottomTab";
import ChatNavigator from "../Home/Chat/ChatNavigator";
import {
  styleChatHeader,
  styleEventsHeader,
  styleMyEventsHeader,
} from "../utils/HeaderDesign";

export default function NavTabView() {
  return (
    <BottomTab.Navigator initialRouteName="MenuNavigator">
      <BottomTab.Screen
        name="MyEventTab"
        component={MyEventTab}
        options={styleMyEventsHeader}
      />
      <BottomTab.Screen
        name="MenuNavigator"
        component={MenuNavigator}
        options={styleEventsHeader}
      />
      <BottomTab.Screen
        name="ChatNavigator"
        component={ChatNavigator}
        options={styleChatHeader}
      />
    </BottomTab.Navigator>
  );
}
