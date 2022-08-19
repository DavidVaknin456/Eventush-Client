import * as React from "react";
import Stack from "../../../Login & Register/util/Stack";
import { MenuView } from "./MenuView";
import CreEvent from "./CreEvent";

export default function MenuNavigator() {
  return (
    <Stack.Navigator initialRouteName="MenuView">
      <Stack.Screen
        options={{ headerShown: false }}
        name="MenuView"
        component={MenuView}
      />
      <Stack.Screen name="CreEve" component={CreEvent} />
    </Stack.Navigator>
  );
}
