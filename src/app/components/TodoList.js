import React from "react";
import { StyleSheet, View } from "react-native";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, setTodos }) => {
  return (
    <View style={styles.container}>
      {todos &&
        todos.map((user, i) => (
          <TodoCard todos={todos} setTodos={setTodos} todo={user} key={i} />
        ))}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
    container: {
      width: "85%",
    },
});
