import styled from "styled-components";
import { Link } from "react-router-dom";
export const Button = styled(Link)`
  background-color: ${(props) =>
    props.isUser === true ? "#ff4d4d" : "#4caf50"};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
