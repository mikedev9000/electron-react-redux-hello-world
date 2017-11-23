import React from 'react';
import TodoList from './TodoList';
import TodoAdder from './TodoAdder';

export default class Root extends React.PureComponent {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <TodoAdder />
        <TodoList />
      </div>
    );
  }
}
