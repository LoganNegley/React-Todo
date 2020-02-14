// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from '../TodoComponents/TodoForm';
import Todo from '../TodoComponents/Todo';


const TodoList = props => {

    return (
      <div className='todo-list'>
        {props.todoData.map( (item) =>
        <Todo item= {item} key={item.id} toggleClick={props.toggleClick}/>
        )}
      </div>
    );
  };


export default TodoList;
