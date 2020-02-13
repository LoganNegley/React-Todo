import React from 'react';
import data from '../src/components/TodoComponents/Todo';
import TodoList from '../src/components/TodoComponents/TodoList.js';
import TodoForm from '../src/components/TodoComponents/TodoForm';



class App extends React.Component {

  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      // data state
      todoTasks:data
    }
      console.log(this.state.todoTasks)

  }

  // functions
  handleChange = event =>{
    
  };

 toggleClick =() =>{
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList todoData={this.state.todoTasks}/>

      </div>
    );
  }
}

export default App;
