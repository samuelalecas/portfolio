import React from "react";

interface buttonProps {
  text: string,
  id: string,
  onClick?: () => void
}

const gameboardButton: React.FC<buttonProps> = ({text, id, onClick}) => {
  let buttonStyle =
    "w-32 h-32 border";
  return <button id={id} onClick={onClick} className={buttonStyle}>{text}</button>;
};

export default gameboardButton;
