import React from "react";
import { View } from "react-native";
import TodoCard from "./TodoCard";
import TodoMore from "./TodoMore";

const TodoList = ({ data, isTodoModalOpen, setIsTodoModalOpen, setTodos }) => {
  return (
    <View>
      {isTodoModalOpen && (
        <TodoMore
          data={data}
          setIsTodoModalOpen={setIsTodoModalOpen}
          setTodos={setTodos}
        />
      )}

      {data && data.map((user, i) => <TodoCard data={user} key={i} />)}
    </View>
  );
};

export default TodoList;
