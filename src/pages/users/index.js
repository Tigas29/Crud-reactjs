import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  ToDoList,
  Button,
  ListItem,
  Trash,
  EditUser,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/button";
function Users() {
  const [users, setUsers] = useState([]);
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
      <ButtonComponent children={"Voltar"} to="/" isUser={true} />
    </Container>
  );
}

export default Users;
