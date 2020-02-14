import React from 'react';


const TodoForm = props => {    return (
      <form>
        <input type='text' name='item'/>
        <button>Add</button>
        <button>Clear</button>
      </form>
    );
  }

export default TodoForm;
