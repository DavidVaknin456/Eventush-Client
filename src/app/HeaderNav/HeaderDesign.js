import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const styleMyEventsHeader = {
  headerShown: false,
  tabBarLabel: " Personal Events",
  tabBarIcon: () => (
    <FontAwesome name="calendar-check-o" color={colors.black} size={23} />
  ),
};

const styleEventsHeader = {
  headerShown: false,
  tabBarLabel: "Events",
  tabBarIcon: () => (
    <AntDesign name="appstore-o" color={colors.black} size={23} />
  ),
};

const styleAdminHeader = {
  headerShown: false,
  tabBarLabel: "Admin Events",
  tabBarIcon: () => (
    <MaterialIcons name="admin-panel-settings" color={colors.black} size={23} />
  ),
};

export { styleMyEventsHeader, styleEventsHeader, styleAdminHeader };
