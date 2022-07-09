import React, { useRef, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { app, auth } from "./Auth";
import { PhoneAuthProvider } from "firebase/auth";

const PhoneNumber = ({ showMessage, setLoginState, setVerificationId }) => {
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();

  const sendVerf = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      showMessage({
        text: "Verification code has been sent to your phone.",
      });
      setLoginState("SmsVerification");
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  };

  return (
    <View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
        // attemptInvisibleVerification
      />
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        placeholder="+1 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      <Button
        title="Send Verification Code"
        disabled={!phoneNumber}
        onPress={sendVerf}
      />
    </View>
  );
};

export { PhoneNumber };
