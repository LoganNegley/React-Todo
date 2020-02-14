import React from 'react';


const TodoForm = props => {
  return (
      <form onSubmit={props.handleSubmit}>
        <input type='text' name='task' value={props.todoTasks.task} onChange={props.handleChanges}/>
        <button>Add</button>
        <button>Clear</button>
      </form>
    );
  }

export default TodoForm;