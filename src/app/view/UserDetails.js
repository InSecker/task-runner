import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const UserDetails = ({ setPageId, widthScreen, userData }) => {
  // const { firstName, lastName, entreprise, email, tel } = userData;
  console.log(`${widthScreen - 200}`);

  return (
    <View style={styles.container}>
      <Header title="Back to home"></Header>
      <View style={styles.mapContainer}></View>
      <View style={styles(widthScreen).userContainer}>
        <Text></Text>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = ({ widthScreen }) =>
  StyleSheet.create({
    container: {
      height: "auto",
      width: "100%",
    },
    mapContainer: {
      width: "100%",
      height: "250px",
      backgroundColor: "grey",
      opacity: 0.4,
    },
    userContainer: {
      width: "330px",
      height: "330px",
      border: "1px solid red",
      position: "absolute",
      top: "200px",
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      textAlign: "center",
    },
  });
