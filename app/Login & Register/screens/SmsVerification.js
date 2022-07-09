import { View, Text, TextInput, Button } from "react-native";
import React, { useRef, useState } from "react";
import { auth } from "./Auth";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";

const SmsVerification = ({ showMessage, verificationId, setLoginState }) => {
  const [verificationCode, setVerificationCode] = useState();

  const confirmVerf = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      setLoginState("7");
      showMessage({ text: "Phone authentication successful 👍" });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  };

  return (
    <View>
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationId}
        onPress={confirmVerf}
      />
    </View>
  );
};

export { SmsVerification };
