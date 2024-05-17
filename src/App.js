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
} from './style';

function App() {
  const [users, setUsers] = useState([]);
  const name = useRef()
  const age = useRef()

  function AddNewUser() {
    setUsers([...users, { name: name.input.value, age: age.input.value, id: uuid() }]);
  }



  function deleteUser(idUser) {
    const newUser = users.filter(user => user.id !== idUser);
    setUsers(newUser);
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
          </ListItem>
        ))}
      </ToDoList>
    </Container>
  );
}

export default App;
