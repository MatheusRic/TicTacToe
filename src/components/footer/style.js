import styled from "styled-components";

export const WinnerMessage = styled.h2`
  color: ${(prop) =>
    prop.winner === "X" ? "Red" : prop.winner === "E" ? "black" : "blue"};
`;

export const ButtonFooter = styled.button`
  background-color: #daa520;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 100%;
  width: 100%;
  height: 50px;

  cursor: pointer;
`;
