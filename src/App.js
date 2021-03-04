import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            complete: doc.data().complete,
          }))
        );
      });
  }, []);

  function addTodo(todo) {
    db.collection('todos').add({
      todo,
      complete: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  function checkRepeat(value) {
    return todos.some((todo) => todo.todo.trim() === value.trim());
  }

  return (
    <div className='App'>
      <Typography style={{ padding: 16 }} variant='h1'>
        React Todo
      </Typography>
      <TodoForm addTodo={addTodo} checkRepeat={checkRepeat} />
      <TodoList todos={todos} checkRepeat={checkRepeat} />
    </div>
  );
}

export default App;
