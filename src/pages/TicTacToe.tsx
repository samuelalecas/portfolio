import { useEffect, useState } from "react";
import GameboardButton from "../components/atoms/gameboardButton/GameboardButton.component.tsx";
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
      //setGameboard(array);
      localStorage.setItem('gameboard', JSON.stringify(array))
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
      found = combination.filter((index) => gameboard[index] === player);
      // Si devuelve los tres valores, es ganador.
      if (found.length === 3) return true;
    }
    return false;
  };

  // ----------------------------------------------

  // LOCAL STORAGE

  // Con esto, actualizamos el localStorage y se sincroniza en 
  // todas las pestañas cada vez que se almacena en localStorage
  
  useEffect(() => {

    const saveGameboard = () => {
      // Setea dentro del gameboard 
      setGameboard(JSON.parse(localStorage.getItem("gameboard") || "{}"));
    }

    window.addEventListener("storage", saveGameboard);

    return () => {      
      window.removeEventListener('storage', saveGameboard)
    };
  }, []);

  // ------------------------------------------------

  return (
    <>
      <Header/>
      {/* <WinnerWindow /> */}
      <div className="flex flex-col justify-center items-center h-screen bg-slate-100 p-4">
        <div className="w-full sm:w-[26.5rem] grid grid-cols-3 grid-rows-3 sm:flex sm:flex-wrap sm:p-5 bg-white shadow-lg">
          {gameboard.map((box, index) => (
            <GameboardButton
              key={index}
              id={index.toString()}
              player={box}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <p className="text-2xl font-medium mt-4 text-blue-900">{turn}'s TURN</p>
      </div>
    </>
  );
};

export default TicTacToe;
