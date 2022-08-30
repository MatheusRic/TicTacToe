import { Title, Header, Current } from "./style";

const GameHeader = ({ currentPlayer }) => {
  return (
    <Header>
      <Title>Jogo da Velha</Title>
      <Current currentPlayer={currentPlayer}>{currentPlayer}</Current>
    </Header>
  );
};

export default GameHeader;
