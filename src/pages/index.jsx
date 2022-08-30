import { useEffect, useState } from "react";
import { DivBoard, DivCell } from "../components/gameDivs/style";
import GameHeader from "../components/header";
import GameFooter from "../components/footer";

const GamePage = () => {
  const resetBoard = Array(9).fill("");
  const [board, setBoard] = useState(resetBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handlePlay = (index) => {
    if (winner) {
      return null;
    }

    if (board[index] !== "") {
      return null;
    }
    setBoard(
      board.map((elem, elemIndex) =>
        elemIndex === index ? currentPlayer : elem
      )
    );
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = () => {
    const possibleWins = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possibleWins.forEach((elem) => {
      if (elem.every((ele) => ele === "O")) {
        setWinner("O");
      }
      if (elem.every((ele) => ele === "X")) {
        setWinner("X");
      }
      if (board.every((ele) => ele !== "")) {
        setWinner("E");
      }
    });
  };

  useEffect(checkWinner, [board]);

  return (
    <>
      <GameHeader currentPlayer={currentPlayer}>Jogo da Velha</GameHeader>
      <DivBoard winner={winner}>
        {board.map((elem, index) => (
          <DivCell key={index} item={elem} onClick={() => handlePlay(index)}>
            {elem}
          </DivCell>
        ))}
      </DivBoard>
      <GameFooter
        winner={winner}
        setWinner={setWinner}
        setCurrentPlayer={setCurrentPlayer}
        setBoard={setBoard}
        resetBoard={resetBoard}
      />
    </>
  );
};

export default GamePage;
