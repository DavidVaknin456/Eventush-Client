import React, { useContext, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import Slider from "@react-native-community/slider";
import { Icon } from "react-native-elements";
import { UserContext } from "../../../utils/UserContext";
import * as PropTypes from "prop-types";
import MySlider from "./MySlider";
import axios from "axios";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function CustomSliderMarkerLeft(props) {
  return null;
}

CustomSliderMarkerLeft.propTypes = { currentValue: PropTypes.number };

function CustomSliderMarkerRight(props) {
  return null;
}

CustomSliderMarkerRight.propTypes = { currentValue: PropTypes.number };
const CreateEvent = ({ navigation }) => {
  const { token } = useContext(UserContext);
  const [category, setCategory] = useState("77");
  const [date, setDate] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [minAge, setMinAge] = useState();
  const [minMembers, setMinMembers] = useState(2);
  const [maxMembers, setMaxMembers] = useState(2);

  // const url = "http://localhost:3000/add-Event";
  const url = "https://intelligent-livre-26497.herokuapp.com/add-Event";
  const authHeader = { Authorization: `Basic ${token}` };
  const data = {
    category: category,
    date: date,
    location: location,
    minAge: minAge,
    minMembers: minMembers,
    maxMembers: maxMembers,
    description: description,
    isEventApproved: false,
  };
  const options = {
    method: "POST",
    data: data,
    headers: authHeader,
    url: url,
  };

  const handleSubmit = async (e) => {
    // const { a } = useGetEvents();
    e.preventDefault();
    await axios(options)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
        console.log("add event failed");
      });
    navigation.navigate("MenuView");
  };

  return (
    <View style={styles.addPadding}>
      <SafeAreaView>
        <SelectCategory setCategory={setCategory} />
        <TextInput
          style={styles.input}
          onChangeText={setDate}
          placeholder="Enter Date"
        />
        <TextInput
          style={styles.input}
          onChangeText={setLocation}
          placeholder="Enter Location"
        />
        <TextInput
          style={styles.input}
          onChangeText={setDescription}
          placeholder="Description"
        />
        <View
          style={{
            padding: 1,
            alignItems: "stretch",
            justifyContent: "center",
            margin: 20,
          }}
        >
          <Text>Min Age: {minAge}</Text>
          <Slider
            value={minAge}
            onValueChange={setMinAge}
            maximumValue={60}
            minimumValue={18}
            step={1}
            trackStyle={{ height: 10, backgroundColor: "transparent" }}
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: "transparent",
            }}
            thumbProps={{
              children: (
                <Icon
                  name="heartbeat"
                  type="font-awesome"
                  size={20}
                  reverse
                  containerStyle={{ bottom: 20, right: 20 }}
                  color="#f50"
                />
              ),
            }}
          />

          <MySlider
            minMembers={minMembers}
            setMinMembers={setMinMembers}
            maxMembers={maxMembers}
            setMaxMembers={setMaxMembers}
          />
        </View>
        <Button onPress={handleSubmit} title="Submit" color="#841584" />
      </SafeAreaView>
    </View>
  );
};

const dataCategory = [
  { label: "Soccer", value: "Soccer" },
  { label: "Basketball", value: "Basketball" },
  { label: "Tennis", value: "Tennis" },
  { label: "Yoga", value: "Yoga" },
  { label: "Running", value: "Running" },
  { label: "Climbing", value: "Climbing" },
];

const SelectCategory = ({ setCategory }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dataCategory}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select Event Category" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          setCategory(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  addPadding: {
    marginTop: 10,
    padding: 15,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
