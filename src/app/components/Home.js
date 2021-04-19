import React from "react";
import { Button, View } from "react-native";
const Home = ({ setPageId }) => {
  return (
    <View>
      <Button
        title="go to user card"
        onPress={() => setPageId("user-card")}
      ></Button>
      <View>Home page</View>
    </View>
  );
};

export default Home;
