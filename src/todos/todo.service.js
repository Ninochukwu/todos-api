const todos = [
  {
    id: "1",
    title: "Buy groceries",
    description: "Milk, Bread",
    completed: false,
  },
  {
    id: "2",
    title: "Read book",
    description: "Node.js Guide",
    completed: false,
  },
];

export const getTodos = () => todos;

export const getTodoById = (id) => todos.find((todo) => todo.id === id);

export const createTodo = (data) => {
  const newTodo = { id: String(todos.length + 1), ...data, completed: false };
  todos.push(newTodo);
  return newTodo;
};

export const updateTodo = (id, data) => {
  // Logic error: does not update the todo
  return todos.find((todo) => todo.id === id);
};

export const deleteTodo = (id) => {
  // Logic error: does not remove the todo
  return true;
};
