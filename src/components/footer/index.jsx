import { WinnerMessage, ButtonFooter } from "./style";

const GameFooter = ({
  winner,
  setWinner,
  setCurrentPlayer,
  setBoard,
  resetBoard,
}) => {
  const resetGame = () => {
    if (winner === "E") {
      setWinner("X");
    } else {
      setWinner(winner);
    }
    setBoard(resetBoard);
    setWinner(null);
  };

  return (
    <footer>
      {winner ? (
        <>
          {winner === "E" ? (
            <>
              <WinnerMessage winner={winner}>Empatou</WinnerMessage>
              <ButtonFooter onClick={() => resetGame()}>
                Recomecar Jogo
              </ButtonFooter>
            </>
          ) : (
            <>
              <WinnerMessage winner={winner}>"{winner}" Venceu!</WinnerMessage>
              <ButtonFooter onClick={() => resetGame()}>
                Recomecar Jogo
              </ButtonFooter>
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </footer>
  );
};

export default GameFooter;
