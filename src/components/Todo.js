import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import React, { useEffect, useState } from 'react';
import db from '../firebase';

function Todo({ todo, onEditMode }) {
  const [checked, setChecked] = useState(todo.complete);

  useEffect(() => {
    db.collection('todos').doc(todo.id).set(
      {
        complete: checked
      },
      { merge: true }
    );
  }, [checked, todo.id]);

  function removeTodo(id) {
    db.collection('todos').doc(id).delete();
  }

  return (
    <ListItem style={{ width: '25%', margin: 'auto' }}>
      <Checkbox
        checked={checked}
        onClick={(e) => setChecked(e.target.checked)}
      />
      <Typography
        style={{ textDecoration: checked ? 'line-through' : null }}
        variant='body1'
      >
        {todo.todo}
      </Typography>
      <IconButton onClick={() => removeTodo(todo.id)}>
        <CloseIcon />
      </IconButton>
      <IconButton onClick={() => onEditMode(todo.id)}>
        <EditIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
