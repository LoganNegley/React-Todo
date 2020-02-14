import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
margin: 0 auto;
`;

const TodoForm = props => {
  return (
      <Form onSubmit={props.handleSubmit}>
        <input type='text' name='task' value={props.todoTasks.task} onChange={props.handleChanges}/>
        <button type='submit'>Add</button>
        <button onClick={props.clear}>Clear</button>
      </Form>
    );
  }

export default TodoForm;