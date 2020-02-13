import React from 'react';


class TodoForm extends React.Component {

  render() {
    return (
      <form>
        <input type='text' name='item'/>
        <button>Add</button>
        <button>Clear</button>

      </form>
    );
  }
}

export default TodoForm;
