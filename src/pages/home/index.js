import React, { useState, useRef } from "react";
import axios from "axios";
import { Container, Form, Input, Button } from "./style";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/button";
function Home() {
  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const ageRef = useRef();
  const navigate = useNavigate();

  async function addNewUser() {
    const { data: newUsers } = await axios.post("http://localhost:3001/user", {
      name: nameRef.current.value,
      age: ageRef.current.value,
    });
    setUsers([...users, newUsers]);
    navigate("/users");
  }

  return (
    <Container>
      <Form>
        <Input type="text" placeholder="Nome" ref={nameRef} />
        <Input type="text" placeholder="Idade" ref={ageRef} />
        <ButtonComponent onClick={addNewUser} children="Cadastrar" />
      </Form>
    </Container>
  );
}

export default Home;
