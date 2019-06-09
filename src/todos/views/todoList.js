import React from 'react';
import TodoItem from './todoItem';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { FilterTypes } from '../../constants';
import {
  selectVisibleTodos
} from '../selector';


const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {
      todos.map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
        />
      ))
    }
  </ul>
);

TodoList.propTypes = {
  todos: propTypes.array.isRequired,
};

// 已使用 reselect库 提高数据获取性能
// const selectVisibleTodos = (todos,filter) => {
//   switch (filter) {
//     case FilterTypes.ALL:
//       return todos;
//     case FilterTypes.COMPLETED:
//       return todos.filter(item => item.completed);
//     case FilterTypes.UNCOMPLETED:
//       return todos.filter(item => !item.completed);
//     default:
//       throw new Error('unsupported filter');
//   }
// };

const mapStateToProps = (state) => {
  return {
    // todos: selectVisibleTodos(state.todos, state.filter)
    todos: selectVisibleTodos(state)
  }
};

export default connect(mapStateToProps, null)(TodoList)