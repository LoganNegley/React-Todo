import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const Form = styled.form`
margin: 0 auto;
`;

const ButtonContainer = styled.div`
margin-top:10px;
`;

const Input = styled.input`
width:75%;
`;



const TodoForm = props => {
  return (
      <Form onSubmit={props.handleSubmit}>
        <Input type='text' name='task' value={props.todoTasks.task} onChange={props.handleChanges}/>
        <ButtonContainer>
        <Button color="success" type='submit'>Add A Todo</Button>
        <Button color='danger' onClick={props.clear}>Clear Completed</Button>
        </ButtonContainer>
      </Form>
    );
  }

export default TodoForm;