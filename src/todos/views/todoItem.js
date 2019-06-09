import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from "../actions";

const TodoItem = ({text, completed, onToggle, onRemove}) => {
  const checkedProp = completed ? {checked: true} : {checked: false};
  return (
    <li
      className="todo-item"
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle}/>
      <label className="text">{text}</label>
      <button className="remove" onClick={onRemove}>×</button>
    </li>
  )
};


TodoItem.propTypes = {
  text: propTypes.string.isRequired,
  onToggle: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
  completed: propTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps;
  return {
    onToggle: () => {
      dispatch(toggleTodo(id))
    },
    onRemove: () => {
      dispatch(removeTodo(id))
    }
  }
};

export default connect(null, mapDispatchToProps)(TodoItem)

