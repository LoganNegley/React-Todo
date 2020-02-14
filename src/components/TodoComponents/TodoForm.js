import React from 'react';


const TodoForm = props => {

  // submitClear=(event)=>{
  //   event.preventDefault();
  //   props.clear()
  // }
  return (
      <form onSubmit={props.handleSubmit}>
        <input type='text' name='task' value={props.todoTasks.task} onChange={props.handleChanges}/>
        <button type='submit'>Add</button>
        <button onClick={props.clear}>Clear</button>
      </form>
    );
  }

export default TodoForm;