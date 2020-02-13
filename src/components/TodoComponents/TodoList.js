// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from '../TodoComponents/TodoForm';


class TodoList extends React.Component {

  render() {
    return (
      <div>
        <TodoForm/>
        <p>Todo List.....</p>
      </div>
    );
  }
}

export default TodoList;
