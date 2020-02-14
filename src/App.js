import React from 'react';

import TodoList from '../src/components/TodoComponents/TodoList.js';
import TodoForm from '../src/components/TodoComponents/TodoForm';

const data = [
    {
      task:'Cook', 
      id: 1, 
      completed:false
      },
      {
        task:'Shop',
        id: 2,
        completed:false
      },
      {
        task:'Homework',
        id: 3,
        completed:false
      }
      ];

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      // State
      todoTasks:data
    }
      console.log(this.state.todoTasks)
  }

  // functions
  handleChange = event =>{

  };

     toggleClick = (clickedId) => {
       const newtem = this.state.todoTasks.map((item)=>{
         if(item.id=== clickedId){
          return {}
         }else{
           return item;
         }
       })
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
