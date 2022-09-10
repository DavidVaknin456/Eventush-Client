import React, { useEffect } from "react";
import { Auth } from "./Login & Register/screens/Auth";
import Pending from "./Login & Register/screens/Pending";
import Register from "./Login & Register/screens/Register";
import AuthState from "./Login & Register/util/AuthState";
import Stack from "./app/utils/Stack";
import useAuthentication from "./Login & Register/util/useAuthentication";
import useRegister from "./Login & Register/util/useRegister";
import useGetIDToken from "./app/utils/useGetIDToken";
import NavComponent from "./app/NavComponent";
import { Image, Text, TouchableHighlight } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EditProfile from "./app/HeaderNav/Profile/EditProfile";
import Settings from "./app/HeaderNav/Profile/Settings";
import ProfileMenu from "./app/HeaderNav/Profile/ProfileMenu";

export default function Entry({ navigation: { navigate, replace } }) {
  useGetIDToken();
  const { isAuthenticate } = useAuthentication();
  const { isRegister } = useRegister();
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
        name={AuthState.loggedInAndRegister}
        component={NavComponent}
        options={({ navigation: { navigate } }) => ({
          headerTitle: () => <Text>Eventush</Text>,
          headerRight: () => (
            <TouchableHighlight onPress={() => navigate("Filter")}>
              <AntDesign name="filter" color={colors.black} size={23} />
            </TouchableHighlight>
          ),
          headerLeft: () => (
            <TouchableHighlight onPress={() => navigate("ProfileMenu")}>
              <Image
                style={{
                  width: 32,
                  height: 32,
                  margin: 10,
                }}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIsli7rxCwvZ8BNVEum9Oq-jJQ902e5IdgNLbMvkEPg&s",
                }}
              />
            </TouchableHighlight>
          ),
          headerStyle: {
            backgroundColor: "#ff69b4",
          },
          tabBarLabel: " Personal Events",
          tabBarIcon: () => (
            <FontAwesome
              name="calendar-check-o"
              color={colors.black}
              size={23}
            />
          ),
        })}
      />
      <Stack.Screen name="ProfileMenu" component={ProfileMenu} />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
