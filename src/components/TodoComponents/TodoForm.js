import React from 'react';


const TodoForm = props => {
  return (
      <form>
        <input type='text' name='item' value={props.todoTasks.task} onChange={props.handleChange}/>
        <button>Add</button>
        <button>Clear</button>
      </form>
    );
  }

export default TodoForm;
