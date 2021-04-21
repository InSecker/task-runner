import React from "react";
import { View } from "react-native";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, setTodos }) => {
  return (
    <View>
      {todos &&
        todos.map((user, i) => (
          <TodoCard todos={todos} setTodos={setTodos} todo={user} key={i} />
        ))}
    </View>
  );
};

export default TodoList;
