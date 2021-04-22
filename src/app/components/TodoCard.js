import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { orderTodos } from "../utils/helpers";

const TodoCard = ({ todo, todos, setTodos }) => {
  const toggleCheckbox = () => {
    const newTodos = todos.map((newTodo) => {
      if (todo.id === newTodo.id) {
        newTodo.completed = !newTodo.completed;
        return newTodo;
      }
      return newTodo;
    });
    orderTodos(newTodos, setTodos);
  };
  return (
    <View style={styles.main_container}>
      <View style={styles.todoContent}>
        <Text style={styles.text}>{todo.title}</Text>
        <TouchableOpacity onPress={toggleCheckbox}>
          {todo.completed ? (
            <Icon style={styles.icon} name="check-box" size={20}></Icon>
          ) : (
            <Icon
              style={styles.icon}
              name="check-box-outline-blank"
              size={20}
            ></Icon>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  todoContent: {
    flexDirection: "row",
    width: "100%",
    height: "auto",
    justifyContent: "space-between",
    textAlign: "left",
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
  text: {
    width: "80%",
    fontSize: 16,
    fontWeight: "500",
  },
});
