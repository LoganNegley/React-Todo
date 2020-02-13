// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from '../TodoComponents/TodoForm';


class TodoList extends React.Component {

  render(props) {
    return (
      <div>
        {props.todoData.map((item)=>{
            <p>{item.task}</p>
        })}
      </div>
    );
  }
}

export default TodoList;
