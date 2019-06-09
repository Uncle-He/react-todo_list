import React from 'react';
import TodoAdd from './todoAdd';
import TodoList from './todoList';

import './style.css';

export default () => {
  return (
    <div className="todos">
      <TodoAdd/>
      <TodoList/>
    </div>
  )
}