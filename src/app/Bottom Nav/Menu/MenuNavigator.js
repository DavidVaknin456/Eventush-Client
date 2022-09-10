import * as React from "react";
import Stack from "../../utils/Stack";
import { MenuView } from "./MenuView";
import CreateEvent from "./CreateEvent/CreateEvent";

export default MenuNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MenuView">
      <Stack.Screen
        options={{ headerShown: false }}
        name="MenuView"
        component={MenuView}
      />
      <Stack.Screen name="CreateEvent" component={CreateEvent} />
    </Stack.Navigator>
  );
};
