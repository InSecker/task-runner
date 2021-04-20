import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";

const SearchBar = ({ searchText, onSearch }) => {
  return (
    <View style={styles.main_container}>
      <View style={styles.searchContent}>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => onSearch(text)}
          placeholder="Rechercher un utilisateur"
        />
        <Icon name="search" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    width: "85%",
    position: "relative",
  },
  textinput: {
    height: 50,
    padding: 10,
    width: "100%",
  },
  searchContent: {
    flexDirection: "row",
    bottom: "25%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#fff",
    backgroundColor: "#fff",
    position: "absolute",
    borderWidth: 1,
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
});

export default SearchBar;
