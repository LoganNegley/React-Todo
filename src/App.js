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
  };

  // functions
  handleChange = event =>{

  };

     toggleClick = (clickedId) => {
       const newTodo = this.state.todoTasks.map((item)=>{
         if(item.id=== clickedId){
          return {
            ...item,
            completed: !item.completed
          }
         }else{
           return item;
         }
       });

       this.setState({
         todoTasks: newTodo
       });
       console.log('clicked')
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm todoTasks={this.state.todoTasks} handleChanges={this.handleChanges}/>
        <TodoList todoData={this.state.todoTasks} toggleClick={this.toggleClick}/>
      </div>
    );
  }
}

export default App;
