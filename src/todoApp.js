import React from 'react';
import { View as Todos } from './todos/';
import { View as Filter } from './filter/';

export default () => {
  return (
    <div>
      <Todos/>
      <Filter/>
    </div>
  )
}