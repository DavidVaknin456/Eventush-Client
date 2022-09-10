import React, { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

const DesignModal = ({ isModalVisible, setModalVisible, eventDetails }) => {
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.container}>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={eventDetails}
              renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
            />
          </SafeAreaView>
          <Pressable style={styles.button} onPress={toggleModal}>
            <Text style={styles.text}>Close details</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default DesignModal;

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
