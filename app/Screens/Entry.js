import React, { useEffect, useState } from "react";
import { Auth } from "../Login & Register/screens/Auth";
import Pending from "../Login & Register/screens/Pending";
import Register from "../Login & Register/screens/Register";
import { AuthState } from "../Login & Register/util/AuthState";
import { HomeView } from "./HomeView";
import Stack from "../Login & Register/util/Stack";
import useAuthentication from "../Login & Register/util/useAuthentication";
import useRegister from "../Login & Register/util/useRegister";

export default function Entry({ navigation: { navigate, replace } }) {
  const { isRegister } = useRegister();
  const { isAuthenticate } = useAuthentication();

  useEffect(() => {
    if (isAuthenticate == null) {
      replace("pending");
    } else if (!isAuthenticate) {
      replace("notLoggedIn");
    } else if (isAuthenticate) {
      replace("loggedIn");
    } else if (isAuthenticate && isRegister) {
      replace("loggedInAndRegister");
    }
  }, [isAuthenticate]);
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthState.pending} component={Pending} />
      <Stack.Screen name={AuthState.notLoggedIn} component={Auth} />
      <Stack.Screen name={AuthState.loggedIn} component={Register} />
      <Stack.Screen name={AuthState.loggedInAndRegister} component={HomeView} />
    </Stack.Navigator>
  );
}
