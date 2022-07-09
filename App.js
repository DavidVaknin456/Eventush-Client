import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Auth } from "./app/Login & Register/screens/Auth";
import { HomeView } from "./app/Screens/HomeView";
import Entry from "./app/Screens/Entry";
import Stack from "./app/Login & Register/util/Stack";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen name="Entry" component={Entry} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
