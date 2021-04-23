import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { configuration as api } from "../../../config";
import { fetchAPI } from "../utils/helpers";
import Map from "../shared/Map";
import UserList from "../components/UserList";
import SearchBar from "../shared/SearchBar";

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetchAPI(api.endpoints.users).then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  };

  const searchUser = (searchedText) => {
    if (searchedText.length >= 2) {
      const findedUser = users.filter((user) =>
        user.name.includes(searchedText)
      );
      setUsers(findedUser);
    } else {
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Map style={{ flex: 1, backgroundColor: "red" }} users={users} />
      <StatusBar style="auto" />
      <SearchBar
        searchText={searchText}
        onSearch={(searchedText) => searchUser(searchedText)}
      />
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#80A6C5" />
        </View>
      ) : (
        <UserList navigation={navigation} users={users} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default Home;
