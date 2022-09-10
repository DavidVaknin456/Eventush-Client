import MenuNavigator from "./Menu/MenuNavigator";
import MyEventsNavigator from "./MyEvents/MyEventsNavigator";
import BottomTab from "../utils/BottomTab";
import AdminEvents from "./AdminEvents/AdminEvents";
import {
  styleAdminHeader,
  styleEventsHeader,
  styleMyEventsHeader,
} from "../HeaderNav/HeaderDesign";

export default function NavTabView() {
  return (
    <BottomTab.Navigator initialRouteName="MenuNavigator">
      <BottomTab.Screen
        name="MyEventsNavigator"
        component={MyEventsNavigator}
        options={styleMyEventsHeader}
      />
      <BottomTab.Screen
        name="MenuNavigator"
        component={MenuNavigator}
        options={styleEventsHeader}
      />
      <BottomTab.Screen
        name="AdminEvents"
        component={AdminEvents}
        options={styleAdminHeader}
      />
    </BottomTab.Navigator>
  );
}
