import styled from "styled-components";

export const DivBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 240px);
  grid-template-rows: repeat(3, 200px);
  gap: 1rem;

  opacity: ${(prop) => (prop.winner ? "0.7" : "")};
`;

export const DivCell = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  background-color: white;
  border-radius: 5px;
  font-size: 10rem;
  font-weight: bold;
  color: black;

  color: ${(prop) => (prop.item === "X" ? "red" : "blue")};

  cursor: ${(prop) => (prop.item !== "" ? "not-allowed" : "pointer")};
`;
