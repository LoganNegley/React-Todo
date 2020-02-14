// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from '../TodoComponents/TodoForm';
import Todo from '../TodoComponents/Todo';


class TodoList extends React.Component {

  render() {
    return (
      <div>
        {this.props.todoData.map( (item) =>
        <Todo item= {item} toggleClick={this.props.toggleClick}/>
        )}
      </div>
    );
  }
}

export default TodoList;
