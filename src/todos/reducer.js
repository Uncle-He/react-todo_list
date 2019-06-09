import { ADD_TODO, ADD_TOGGLE, ADD_REMOVE } from './actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        },
        ...state
      ];
    case ADD_TOGGLE:
      return state.map((todoItem) => {
        if (todoItem.id === action.id) {
          return { ...todoItem, completed: !todoItem.completed }
        } else {
          return todoItem;
        }
      });
    case ADD_REMOVE:
      return state.filter((todoItem) => (todoItem.id !== action.id));
    default:
      return state
  }
}