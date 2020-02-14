import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`

`;

const Task = styled.p`
font-size:20px;
`;

const Todo = props => {

    return (
      <TodoContainer onClick= {()=> props.toggleClick(props.item.id)}>
          <Task>{props.item.task}</Task>
      </TodoContainer>
    );
}

export default Todo;