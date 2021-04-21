import { configuration as api } from "../../../config";

export const fetchAPI = async (endpoints) => {
  try {
    const response = await fetch(`${api.base_url}${endpoints}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

export const orderTodos = (todos, setTodos) => {
  const completed = todos.filter((todo) => todo.completed);
  const incomplete = todos.filter((todo) => !todo.completed);
  setTodos([...incomplete, ...completed]);
};
