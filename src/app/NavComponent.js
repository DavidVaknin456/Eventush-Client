import Stack from "./utils/Stack";
import NavTabView from "./Bottom Nav/NavTabView";
import React from "react";
import FilterComponent from "./HeaderNav/FilterComponent";

export default NavComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="NavTabView"
        component={NavTabView}
      />
      <Stack.Screen name="Filter" component={FilterComponent} />
    </Stack.Navigator>
  );
};
