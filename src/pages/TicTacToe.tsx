import { useState } from "react";
import TicTacToeLayout from "../components/layouts/TicTacToeLayout.component.tsx";
import GameboardButton from "../components/atoms/gameboardButton/GameboardButton.component.tsx"
import { Header } from "../components/moleculi/Header.component.tsx";

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

  const isAWinnerComb: number[][] = [
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
    // Recorre el array
    for (let combination of isAWinnerComb) {

      let found: number[] | undefined = [];
      // Filtra el array
      found = combination.filter( index => gameboard[index] === player);
      // Si devuelve los tres valores, es ganador.
      if (found.length === 3) return true;
      }
      return false;
    }

  // ----------------------------------------------

  return (
    <>
    <Header/>
      <TicTacToeLayout turn={turn}>
        {gameboard.map((box, index) => (
          <GameboardButton
            key={index}
            id={index.toString()}
            player={box}
            onClick={() => handleClick(index)}
          />
        ))}
      </TicTacToeLayout>
    </>
  );
};

export default TicTacToe;
