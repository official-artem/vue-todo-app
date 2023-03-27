import { client } from "../utils/httpClient"

export const getTodos = () => {
  return client.get('/todos');
};

export const createTodo = (title) => {
  return client.post('/todos', { 
    title, 
    completed: false 
  });
};

export const updateTodo = ({ _id, title, completed }) => {
  return client.patch(`/todos/${_id}`, { 
    title, 
    completed, 
  });
};

export const deleteTodo = (todoId) => {
  return client.delete(`/todos/${todoId}`);
};