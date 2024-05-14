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


  return (
    <Container className="App">
      <Input placeholder='nome' />
      <Input placeholder='Idade' />
      <Button>Cadastrar</Button>

      <ul>
        <li>qaaq</li>
        <li>qaaq</li>
        <li>qaaq</li>
        <li>qaaq</li>
      </ul>
    </Container >
  );
}

export default App;
