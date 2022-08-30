import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 39%;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 10%;
`;

export const Current = styled.h2`
  color: ${(props) => (props.currentPlayer === "X" ? "red" : "blue")};
  font-size: 400%;
  width: 10%;
`;

export const Title = styled.h1`
  font-size: 300%;
`;
