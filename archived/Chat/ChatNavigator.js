import * as React from "react";
import Stack from "../../src/app/utils/Stack";
import { ChatView } from "./ChatView";
import { Conversation } from "./Conversation";

export default function ChatNavigator() {
  return (
    <Stack.Navigator initialRouteName="ChatView">
      <Stack.Screen name="ChatView" component={ChatView} />
      <Stack.Screen name="Conversation" component={Conversation} />
    </Stack.Navigator>
  );
}
