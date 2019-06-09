import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as todosReducer } from './todos/';
import { reducer as filterReducer } from './filter/';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/*

Store 数据结构

{
  todos: [
    {
      id: 1,
      text: 'todoList.1',
      completed: false
    },
    {
      id: 2,
      text: 'todoList.2',
      completed: false
    },
    ...
  ],
  filter: '全部'
}

*/

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

const initValue = {
  todos: [
    {
      id: -1,
      text: '工作总结',
      completed: false
    },
    {
      id: -2,
      text: '新人培训',
      completed: false
    },
    {
      id: -3,
      text: '绩效考核',
      completed: false
    },
    {
      id: -4,
      text: '任务分配',
      completed: true
    }
  ],
  filter: '全部'
};


const middleware = [];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-immutable-state-invariant').default(), thunk)
}

const store = createStore(reducer, initValue, composeWithDevTools(
  applyMiddleware(...middleware),
));

export default store