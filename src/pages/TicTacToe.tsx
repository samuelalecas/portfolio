import { useState } from "react";
import gameboardButton from "../components/atoms/gameboardButton/gameboardButton.component.tsx";
import TicTacToeLayout from "../components/layouts/TicTacToeLayout.component.tsx";

const TicTacToe = () => {
  // FUNCIONAMIENTO DEL TABLERO
  // ------------------------------------------------------
  // Almacenamos el array en un nuevo array

  const [gameboard, setGameboard] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [turn, setTurn] = useState<string>("X");

  const handleClick = (e: number) => {
    let array = gameboard;

    if (array[e] !== "") {
      console.warn("¡La casilla ya está marcada!");
    } else {
      // Cambiamos la posición con el turno en el array copiado
      array[e] = turn;
      // Se le pasa el array directamente por el setGameboard
      setGameboard(array);
      console.log(gameboard);

      // Comprueba si ha ganado
      if (isAWinner(turn)) {
        console.log("Winner!!");
        setTurn("Winner");
      } else {
        // Se cambia el turno
        setTurn(turn === "X" ? "O" : "X");
      }
    }
  };

  // FUNCIONAMIENTO DEL JUEGO
  // ------------------------------------------------------

  const isAWinnerComb: Array<any> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const isAWinner = (player: string) => {
    for (let combination of isAWinnerComb) {
      for (let index in combination) {
        if (gameboard[index] !== player) {
          return false;
        }
      }
    }

    return true;
  };

  // ----------------------------------------------

  return (
    <>
      <TicTacToeLayout turn={turn}>
        {gameboard.map((box, index) => (
          <gameboardButton
            key={index}
            id={index.toString()}
            text={box}
            onClick={() => handleClick(index)}
          />
        ))}
      </TicTacToeLayout>
    </>
  );
};

export default TicTacToe;
