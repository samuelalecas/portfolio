import React from "react";

export interface ButtonProps {
  name: string;
  variant?: string;
  width?: string;
  onClick?: () => void | string;
  type?: string;
  value?: string;
}

export const Button: React.FC<ButtonProps> = ({ name, variant="default", width="full", onClick, type, value }) => {
  
    let style = "";

    if (variant === "default") {
        style = "bg-green-300 px-3 py-2 rounded-md font-medium text-blue-950 hover:bg-blue-950 hover:text-green-300 transition duration-300 ease-in-out";
    }

    if (variant === "outlined") {
        style = "border-2 border-blue-950 px-2 py-1 rounded-md font-medium text-blue-950 hover:bg-blue-950 hover:text-green-300 transition duration-300 ease-in-out";
    }

    if (variant === "link" ){
      style = "font-medium font-blue-950 hover:text-green-300 hover:underline";
    }

  return (
    <button type={type === "submit" ? type : "button"} className={style + " w-" + width} onClick={onClick} value={value}>
      {name}
    </button>
  );
};
