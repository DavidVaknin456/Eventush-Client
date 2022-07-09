import React, { useState } from "react";
import { Auth } from "../Login & Register/screens/Auth";
import Pending from "../Login & Register/screens/Pending";
import Register from "../Login & Register/screens/Register";
import { AuthState } from "../Login & Register/util/AuthState";
import { HomeView } from "./HomeView";
import Stack from "../Login & Register/util/Stack";
import { StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function Entry(navigation = { navigate, replace }) {
  const [authUserState, setAuthUserState] = useState("pending");
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthState.pending} component={Pending} />
      <Stack.Screen name={AuthState.notLoggedIn} component={Auth} />
      <Stack.Screen name={AuthState.loggedIn} component={Register} />
      <Stack.Screen name={AuthState.loggedInAndRegister} component={HomeView} />
    </Stack.Navigator>
  );
}
