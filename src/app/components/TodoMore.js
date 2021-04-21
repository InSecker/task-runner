import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { configuration as api } from "../../../config";
import { fetchAddTodo, fetchAPI } from "../utils/fetch";

const AddButton = ({ onPress, title, size, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.addButtonContainer,
      size === "sm" && {
        paddingHorizontal: 13,
        paddingVertical: 6,
        elevation: 6,
      },
      backgroundColor && { backgroundColor },
    ]}
  >
    <Text style={[styles.addButtonText, size === "sm" && { fontSize: 18 }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const TodoMore = ({ data, setIsTodoModalOpen, setTodos }) => {
  const [title, setTitle] = useState("");

  const setTodoOnData = (title) => {
    const todoToSave = { title };
    const newTodos = [...data, todoToSave];
    setTodos(newTodos);
    setIsTodoModalOpen(false);
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.containerNew}>
        <TouchableOpacity
          onPress={() => setIsTodoModalOpen(false)}
          style={styles.containerIcon}
        >
          <Icon style={styles.iconClose} name="close" size={25}></Icon>
        </TouchableOpacity>
        <View style={styles.closeIconContainer}></View>
        <Text style={styles.titleNew}>Create a new Todo</Text>
        <TextInput
          style={styles.contentNew}
          onChangeText={(title) => setTitle(title)}
          placeholder="Description de votre Todo"
        />
        <AddButton
          title="Validate"
          size="sm"
          backgroundColor="#fff"
          onPress={() => {
            setTodoOnData(title);
          }}
        />
      </View>
    </View>
  );
};

export default TodoMore;

const styles = StyleSheet.create({
  maincontainer: {
    alignItems: "center",
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  containerNew: {
    width: "100%",
    alignItems: "center",
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 16,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
  },
  titleNew: {
    fontSize: 24,
    paddingBottom: 20,
  },
  contentNew: {
    fontSize: 16,
    textAlign: "left",
    width: "100%",
    minHeight: "80px",
    backgroundColor: "#f3f3f3",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#fff",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  addButtonContainer: {
    marginTop: 24,
    marginBottom: 10,
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 16,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  addButtonText: {
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 400,
  },
  containerIcon: {
    width: "100%",
    alignItems: "flex-end",
  },
  closeIconContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    marginBottom: 8,
  },
});
