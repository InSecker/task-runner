import React from "react";
import { View } from "react-native";
import TodoCard from "./TodoCard";
import TodoMore from "./TodoMore";

const TodoList = ({ todos, isTodoModalOpen, setIsTodoModalOpen, setTodos }) => {
  return (
    <View>
      {isTodoModalOpen && (
        <TodoMore
          todos={todos}
          setIsTodoModalOpen={setIsTodoModalOpen}
          setTodos={setTodos}
        />
      )}

      {todos &&
        todos.map((user, i) => (
          <TodoCard todos={todos} setTodos={setTodos} todo={user} key={i} />
        ))}
    </View>
  );
};

export default TodoList;
