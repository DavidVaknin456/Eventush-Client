import Entry from "../Entry/Entry";
import Stack from "../../Login & Register/util/Stack";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from "./UserContext";

export default function AppInitializer() {
  const [refreshing, setRefreshing] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, refreshing, setRefreshing }}
    >
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
    </UserContext.Provider>
  );
}
