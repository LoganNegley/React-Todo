import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList.js';
import TodoForm from '../src/components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      // data state
    todoData: [{
      task:'Cook ', 
      id: Date.now(), 
      completed:"true"
      }],
      // completed state
      todoCompleted:'',
    }
      console.log(this.state.todoData)

  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm/>
        <TodoList todoData={this.state.todoData}/>

      </div>
    );
  }
}

export default App;
