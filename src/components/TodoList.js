import { List } from '@material-ui/core';
import React, { useState } from 'react';
import EditMode from '../EditMode';
import db from '../firebase';
import Todo from './Todo';

function TodoList({ todos }) {
  const [editIndex, setEditIndex] = useState(-1);

  function onEditMode(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    setEditIndex(index);
  }

  function editTodo(id, input) {
    db.collection('todos').doc(id).set({ todo: input }, { merge: true });
    setEditIndex(-1);
  }

  return (
    <List>
      {todos.map((todo, index) => {
        if (index === editIndex) {
          return <EditMode key={todo.id} todo={todo} editTodo={editTodo} />;
        }
        return <Todo todo={todo} key={todo.id} onEditMode={onEditMode} />;
      })}
    </List>
  );
}

export default TodoList;
