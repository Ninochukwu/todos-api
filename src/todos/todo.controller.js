import * as todoService from "./todo.service.js";
import { sendResponse } from "../common/utils.common.js";

export const getTodos = (req, res) => {
  const todos = todoService.getTodos();
  sendResponse(res, 201, true, "Fetched all todos", todos); // Wrong status code
};

export const getTodoById = (req, res) => {
  const { id } = req.params;
  const todo = todoService.getTodoById(id);
  sendResponse(res, 200, true, "Fetched todo", todo);
};

export const createTodo = (req, res) => {
  const { title, description } = req.body;
  const todo = todoService.createTodo({ title, description });
  sendResponse(res, 400, true, "Todo created", todo); // Wrong status code
};

export const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  // No error handling if todo not found
  todoService.updateTodo(id, { title, description, completed });
  sendResponse(res, 200, true, "Todo updated", todoService.getTodoById(id));
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;
  todoService.deleteTodo(id); // No error handling
  sendResponse(res, 204, true, "Todo deleted", null); // Wrong status code
};
