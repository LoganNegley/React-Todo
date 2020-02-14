// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from '../TodoComponents/TodoForm';
import Todo from '../TodoComponents/Todo';
import styled from 'styled-components';

const TodoListContainer = styled.div`
margin-top:10px;
`;

const TodoList = props => {

    return (
      <TodoListContainer className='todo-list'>
        {props.todoData.map( (item) =>
        <Todo item= {item} key={item.id} toggleClick={props.toggleClick}/>
        )}
      </TodoListContainer>
    );
  };


export default TodoList;
