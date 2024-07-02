import React, { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import {
  Container,
  Form,
  Input,
  Button,
  ToDoList,
  ListItem,
  Trash,
  EditUser,
} from "./style";

function App() {
  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const ageRef = useRef();

  async function addNewUser() {
    const { data: newUsers } = await axios.post("http://localhost:3001/user", {
      name: nameRef.current.value,
      age: ageRef.current.value,
    });
    setUsers([...users, newUsers]);
    nameRef.current.value = "";
    ageRef.current.value = "";
  }

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get(" http://localhost:3001/user");
      setUsers(newUsers);
      console.log(newUsers);
    }
    fetchUsers();
  }, []);

  function findUser(id) {
    const index = users.findIndex((user) => user.id === id);
    return index !== -1 ? { user: users[index], index } : null;
  }

  async function deleteUser(idUser) {
    const data = await axios.delete(" http://localhost:3001/user/" + idUser);
    console.log(data);
    const userIndex = findUser(idUser)?.index;
    if (userIndex !== undefined) {
      const updatedUsers = [...users];
      updatedUsers.splice(userIndex, 1);
      setUsers(updatedUsers);
    }
  }

  function editInfos(idUser) {
    const userDetail = findUser(idUser);
    if (userDetail) {
      const updatedName = window.prompt("Mude o nome", userDetail.user.name);
      const updatedAge = window.prompt("Mude a idade", userDetail.user.age);
      if (updatedName !== null && updatedAge !== null) {
        const updatedUsers = [...users];
        updatedUsers[userDetail.index] = {
          ...userDetail.user,
          name: updatedName,
          age: updatedAge,
        };
        setUsers(updatedUsers);
      }
    } else {
      alert("Usuário não encontrado!");
    }
  }

  return (
    <Container>
      <Form>
        <Input type="text" placeholder="Nome" ref={nameRef} />
        <Input type="text" placeholder="Idade" ref={ageRef} />
        <Button onClick={addNewUser}>Cadastrar</Button>
      </Form>
      <ToDoList>
        {users.map((user) => (
          <ListItem key={user.id}>
            <span>{user.name}</span>
            <span>{user.age}</span>
            <Trash onClick={() => deleteUser(user.id)}>Deletar</Trash>
            <EditUser onClick={() => editInfos(user.id)}>Editar</EditUser>
          </ListItem>
        ))}
      </ToDoList>
    </Container>
  );
}

export default App;
