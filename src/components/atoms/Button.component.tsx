import React from "react";

export interface ButtonProps {
  name: string;
  variant?: string;
  width?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ name, variant="default", width="full", onClick }) => {
  
    let style = "";

    if (variant === "default") {
        style = "bg-green-300 px-3 py-2 rounded-md font-bold text-blue-950 hover:bg-blue-950 hover:text-green-300 transition duration-300 ease-in-out";
    }

    if (variant === "outlined") {
        style = "border-2 border-blue-950 px-3 py-1 rounded-md font-bold text-blue-950 hover:bg-blue-950 hover:text-green-300 transition duration-300 ease-in-out";
    }

  return (
    <button className={style + " w-" + width} onClick={onClick}>
      {name}
    </button>
  );
};
