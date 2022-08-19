import React, { useContext } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import axios from "axios";
import { UserContext } from "../../app/utils/UserContext";

export default function Register() {
  const [name, onChangeName] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [city, onChangeCity] = React.useState("");
  const { user, setUser } = useContext(UserContext);

  const url = "https://intelligent-livre-26497.herokuapp.com/post";
  const data = {
    name: name,
    age: number,
    city: city,
  };

  const { token } = useContext(UserContext);
  const authHeader = { Authorization: `Basic ${token}` };

  const options = {
    method: "POST",
    headers: authHeader,
    data: data,
    url: url,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios(options)
      .then((res) => {
        console.log(res.data);
        console.log("----");
        setUser(res.data);
      })
      .catch((error) => {
        console.error(error);
        console.log("add user failed");
      });
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Enter your name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter your age"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeCity}
        value={city}
        placeholder="Enter your city"
      />
      <Button onPress={handleSubmit} title="Submit User" color="#f194ff" />
      <Button
        onPress={() => {
          console.log("This is an Info log");
        }}
        title="S"
        color="#f194ff"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
});
