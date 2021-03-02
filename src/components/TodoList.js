import { List } from '@material-ui/core';
import React, { useState } from 'react';
import EditMode from '../EditMode';
import db from '../firebase';
import Todo from './Todo';

function TodoList({ todos }) {
  const [editId, setEditId] = useState(null);

  function editTodo(id, input) {
    db.collection('todos').doc(id).set({ todo: input }, { merge: true });
    setEditId(null);
  }

  return (
    <List>
      {todos.map((todo) => {
        if (todo.id === editId) {
          return <EditMode key={todo.id} todo={todo} editTodo={editTodo} />;
        }
        return <Todo todo={todo} key={todo.id} setEditId={setEditId} />;
      })}
    </List>
  );
}

export default TodoList;
