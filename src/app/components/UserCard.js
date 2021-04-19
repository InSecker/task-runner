import React from "react";
import { Button, View } from "react-native";

const UserCard = ({ setPageId }) => {
  return (
    <View>
      <Button
        title="go to home page"
        onPress={() => setPageId("home")}
      ></Button>
      <View>User Page</View>
    </View>
  );
};

export default UserCard;
