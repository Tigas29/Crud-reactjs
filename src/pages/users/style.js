import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const ToDoList = styled.div`
  width: 80%;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  span {
    font-size: 16px;
  }
`;
export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
export const EditUser = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
export const Trash = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff3333;
  }
`;
