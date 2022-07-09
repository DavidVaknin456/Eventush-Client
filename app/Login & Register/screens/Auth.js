import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initFirebase } from "../util/FirebaseInit";
import { PhoneNumber } from "./PhoneNumber";
import { SmsVerification } from "./SmsVerification";
import { HomeView } from "../../Screens/HomeView";

initFirebase();

const app = getApp();
const auth = getAuth();

const Auth = () => {
  const [verificationId, setVerificationId] = useState();
  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = useState();
  const attemptInvisibleVerification = false;

  const [loginState, setLoginState] = useState("PhoneNumber");
  console.log(loginState);

  return (
    <View style={{ padding: 80, marginTop: 50 }}>
      {loginState == "PhoneNumber" ? (
        <PhoneNumber
          setVerificationId={setVerificationId}
          setLoginState={setLoginState}
          showMessage={showMessage}
        />
      ) : (
        <SmsVerification
          verificationId={verificationId}
          showMessage={showMessage}
          setLoginState={setLoginState}
        />
      )}

      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: "center" },
          ]}
          onPress={() => showMessage(undefined)}
        >
          <Text
            style={{
              color: message.color || "blue",
              fontSize: 17,
              textAlign: "center",
              margin: 20,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </View>
  );
};

export { Auth, app, auth };
