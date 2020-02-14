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
      todoTasks:data,
      text:''
    }
      console.log(this.state.todoTasks)
  };

  // Functions
  // handle input
  handleChange = event =>{
this.setState({
  text:event.target.value
});
     console.log(event.target.value)
  };
//  Submit
handleSubmit=(event) => {
event.preventDefault();
this.addNewTask(this.state.text)
console.log('form Submitted')
};

// To clear task
submitClear = (event) =>{
  event.preventDefault();
this.setState({
  todoTasks:this.state.todoTasks.filter(item =>{
    return item.completed===false;
  })
})
};
// Create new task
addNewTask = (itemText) =>{
  const newTask={
    task: itemText,
    id: Date.now(),
    completed:false
  }
  this.setState({
    todoTasks: [...this.state.todoTasks, newTask]
  });
};

// Toggle on click
     toggleClick = (clickedId) => {
       const newTodo = this.state.todoTasks.map((item)=>{
         if(item.id=== clickedId){
           console.log('clicked', item.completed)
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
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm todoTasks={this.state.todoTasks} handleChanges={this.handleChange} handleSubmit={this.handleSubmit} clear={this.submitClear}/>
        <TodoList todoData={this.state.todoTasks} toggleClick={this.toggleClick}/>
      </div>
    );
  }
}

export default App;
