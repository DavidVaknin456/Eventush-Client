import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Entry from "./app/Screens/Entry";
import Stack from "./app/Login & Register/util/Stack";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Entry"
      >
        <Stack.Screen name="Entry" component={Entry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
