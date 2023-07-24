import { useEffect, useState } from "react";
import GameboardButton from "../components/atoms/gameboardButton/GameboardButton.component.tsx";
import { Header } from "../components/moleculi/Header.component.tsx";
import { WinnerWindow } from "../components/atoms/modaleWindow/modaleWindow.component.tsx";
import { Footer } from "../components/moleculi/Footer.component.tsx";

const TicTacToe = () => {
  // FUNCIONAMIENTO DEL TABLERO
  // ------------------------------------------------------
  // Almacenamos el array en un nuevo array

  const emptyGameboard = ["", "", "", "", "", "", "", "", ""];

  const [gameboard, setGameboard] = useState<string[]>(emptyGameboard);
  const [turn, setTurn] = useState<string>("X");
  const [winner, setWinner] = useState<boolean>(false);
  const [draw, setDraw] = useState<boolean>(false);

  const handleClick = (e: number) => {
    let array = gameboard;

    if (array[e] !== "") {
      console.warn("¡La casilla ya está marcada!");
    } else {
      // Cambiamos la posición con el turno en el array copiado
      array[e] = turn;
      // Se le pasa el array directamente por el setGameboard
      //setGameboard(array);
      localStorage.setItem("gameboard", JSON.stringify(array));
      console.log(gameboard);

      if (isAWinner(turn)) {
        setWinner(true);
      } else if (isDrawGame(gameboard)) {
        setDraw(true);
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

  const isDrawGame = (gameboard: string[]) => {
    let found: string[] | undefined;
    found = gameboard.filter((character) => character === "");
    return found.length === 0;
  };

  // ----------------------------------------------

  // LOCAL STORAGE

  // Con esto, actualizamos el localStorage y se sincroniza en
  // todas las pestañas cada vez que se almacena en localStorage

  useEffect(() => {
    const saveGameboard = () => {
      // Setea dentro del gameboard
      setGameboard(JSON.parse(localStorage.getItem("gameboard") || "{}"));
    };

    window.addEventListener("storage", saveGameboard);

    return () => {
      window.removeEventListener("storage", saveGameboard);
    };
  }, []);

  // ------------------------------------------------

  const handleReset = () => {
    setGameboard(emptyGameboard);
    setWinner(false);
    setDraw(false);
  };

  return (
    <>
      <Header />
      <div className="relative">
        {draw ? <WinnerWindow type="draw" onClick={handleReset} /> : <></>}
        {winner ? <WinnerWindow winner={turn} onClick={handleReset} /> : <></>}
      </div>

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
        <div className="h-24 pt-4">
          <p className="text-2xl font-medium text-blue-900">
            {winner || draw ? "" : `${turn}'s Turn!`}
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TicTacToe;
