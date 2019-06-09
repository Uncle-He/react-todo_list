import { ADD_TODO, ADD_TOGGLE, ADD_REMOVE } from './actionTypes';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId ++,
  text: text,
  completed: false
});

export const toggleTodo = (id) => ({
  type: ADD_TOGGLE,
  id: id
});

export const removeTodo = (id) => ({
  type: ADD_REMOVE,
  id: id
});