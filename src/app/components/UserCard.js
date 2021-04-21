import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const UserCard = ({ user, navigation }) => {
  const { name } = user;
  const [firstname, lastname] = name.split(" ");

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("UserDetails", { id: user.id, user })}
      underlayColor={"transparent"}
    >
      <View style={styles.container}>
        <View style={{ marginBottom: 15 }}></View>
        <Text style={styles.firstname}>{firstname}</Text>
        <Text style={styles.lastname}>{lastname}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    marginLeft: 20,
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
  },
  firstname: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
  },
  lastname: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default UserCard;
