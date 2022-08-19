import React, { useEffect, useState, useContext } from "react";
import { Auth } from "../../Login & Register/screens/Auth";
import Pending from "../../Login & Register/screens/Pending";
import Register from "../../Login & Register/screens/Register";
import AuthState from "../../Login & Register/util/AuthState";
import Stack from "../../Login & Register/util/Stack";
import useAuthentication from "../../Login & Register/util/useAuthentication";
import useRegister from "../../Login & Register/util/useRegister";
import useGetIDToken from "../../Login & Register/util/useGetIDToken";
import NavTabView from "./NavTabView";

export default function Entry({ navigation: { navigate, replace } }) {
  useGetIDToken();
  const { isAuthenticate } = useAuthentication();
  const { isRegister } = useRegister();
  console.log("-------------------------------------------------------------");
  console.log("isAuthenticate", isAuthenticate);
  console.log("isRegister", isRegister);

  useEffect(() => {
    if (isAuthenticate == null) {
      replace("pending");
      console.log("Move to pending view");
    } else if (!isAuthenticate) {
      replace("notLoggedIn");
      console.log("Move to login  view");
    } else if (isAuthenticate && isRegister === false) {
      replace("loggedIn");
      console.log("Move to register view");
    } else if (isRegister === true) {
      console.log("Move to home view");
      replace("loggedInAndRegister");
    }
  }, [isAuthenticate, isRegister]);

  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthState.pending} component={Pending} />
      <Stack.Screen name={AuthState.notLoggedIn} component={Auth} />
      <Stack.Screen name={AuthState.loggedIn} component={Register} />
      <Stack.Screen
        options={{ headerShown: false }}
        name={AuthState.loggedInAndRegister}
        component={NavTabView}
      />
    </Stack.Navigator>
  );
}
