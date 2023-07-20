import React from "react";
import xIcon from "../../../assets/x-tictactoe.svg"
import oIcon from "../../../assets/o-tictactoe.svg"

interface buttonProps {
  player: string,
  id: string,
  onClick?: () => void
}

const GameboardButton: React.FC<buttonProps> = ({player, id, onClick}) => {
  let buttonStyle = "aspect-square sm:w-32 sm:h-32 border";

  let playerCharacter: JSX.Element = <></>;

  if (player === "X") {
    playerCharacter = <img src={xIcon} className="w-full" alt="X" />
  } else if (player === "O") {
    playerCharacter = <img src={oIcon} className="w-full" alt="O" />
  } else {
    playerCharacter;
  }
  
  return <button id={id} onClick={onClick} className={buttonStyle}>{playerCharacter}</button>;
};

export default GameboardButton;
