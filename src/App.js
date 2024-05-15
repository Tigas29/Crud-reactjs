import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Trash,
  Check,
} from './style.js'

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);
  function AddNewUser() {
    setUsers([...users, {
      name,
      age,
      id: uuid()
    }
    ],)
  }
  function catchName(e) {
    setName(e.target.value)
  }
  function catchAge(e) {
    setAge(e.target.value)
  }
  return (
    <Container className="App">
      <Input placeholder='nome' onChange={catchName} />
      <Input placeholder='Idade' onChange={catchAge} />
      <Button onClick={AddNewUser}>Cadastrar</Button>
      {users.map(user => (
        <ul key={user.id}>
          <li>{user.name}</li>
          <li>{user.age}</li>
        </ul>
      ))}
    </Container >
  );
}

export default App;
