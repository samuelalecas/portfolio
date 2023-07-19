import React from "react";

interface buttonProps {
  player: string,
  id: string,
  onClick?: () => void
}

const GameboardButton: React.FC<buttonProps> = ({player, id, onClick}) => {
  let buttonStyle = "w-32 h-32 border";

  let playerCharacter: JSX.Element = <></>;

  if (player === "X") {
    playerCharacter = <img src="src/assets/x-tictactoe.svg" alt="X" />
  } else if (player === "O") {
    playerCharacter = <img src="src/assets/o-tictactoe.svg" alt="O" />
  } else {
    playerCharacter;
  }
  
  return <button id={id} onClick={onClick} className={buttonStyle}>{playerCharacter}</button>;
};

export default GameboardButton;
