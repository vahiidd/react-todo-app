import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function EditMode({ todo, editTodo, checkRepeat }) {
  const [input, setInput] = useState(todo.todo);
  function submitHandler(e) {
    e.preventDefault();
    editTodo(todo.id, input);
  }

  function cancelHandler(e) {
    e.preventDefault();
    editTodo(todo.id, todo.todo);
  }
  return (
    <form>
      <TextField value={input} onChange={(e) => setInput(e.target.value)} />
      <Button
        disabled={!input.trim() || checkRepeat(input)}
        type='submit'
        color='primary'
        onClick={(e) => submitHandler(e)}
      >
        Edit
      </Button>
      <Button onClick={cancelHandler}>Cancel</Button>
    </form>
  );
}

export default EditMode;
