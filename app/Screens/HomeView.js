// import React from "react";
// import { StyleSheet, Text, View, Button } from "react-native";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import { initApp } from "../Login & Register/util/FirebaseInit";

// // Initialize Firestore
// const db = getFirestore(initApp);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }

// export default function HomeView() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Button title="Press me" onPress={() => console.log(getCities(db))} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Press me" onPress={() => console.log("getCities(db)")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { HomeView };
