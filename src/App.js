import React, { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import {
  Container,
  Form,
  Input,
  Button,
  ToDoList,
  ListItem,
  Trash,
  EditUser
} from './style';

function App() {
  const [users, setUsers] = useState([]);
  const name = useRef()
  const age = useRef()

  function AddNewUser() {
    setUsers([...users, { name: name.current.value, age: age.current.value, id: uuid() }]);
  }

  function checkUser(callUser) {
    const newUser = users.filter(user => user.id !== callUser);
    return newUser
  }

  function deleteUser(idUser) {
    setUsers(checkUser(idUser));
  }

  return (
    <Container>
      <Form>
        <Input placeholder='Nome' ref={name} />
        <Input placeholder='Idade' ref={age} />
        <Button onClick={AddNewUser}>Cadastrar</Button>
      </Form>
      <ToDoList>
        {users.map(user => (
          <ListItem key={user.id}>
            <span>{user.name}</span>
            <span>{user.age}</span>
            <Trash onClick={() => deleteUser(user.id)}>Deletar</Trash>
            <EditUser onClick={() => deleteUser(user.id)}>Editar</EditUser >
          </ListItem>
        ))}
      </ToDoList>
    </Container>
  );
}

export default App;
