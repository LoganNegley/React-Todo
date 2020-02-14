import React from 'react';



class Todo extends React.Component {



  render() {
    return (
      <div onClick= {()=>{}}>
          <p>{this.props.item.task}</p>
      </div>
    );
  }
}

export default Todo;
