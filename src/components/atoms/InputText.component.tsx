import React from "react";

// Interfaz donde se definen todas las propiedades del componente
interface InputProps {
  type?: "number" | "password" | "text",
  label?: string,
  name?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  variant?: string,
  error?: boolean,
  errorMsg?: string,
}

const InputText: React.FC<InputProps> = ({ type="text", label, name, value, onChange, placeholder, variant, error=false, errorMsg }) => {
  // Variables para almacenar las clases en Tailwind
  let labelStyle = "block mb-2 text-sm font-medium text-blue-950";
  let inputStyle = "bg-white border-b-2 border-green-300 text-blue-950 text-sm p-2 w-full placeholder-blue-950 pl-0";

  // Condicional para cambiar el estilo del borde
  if (variant === "dashed") {
    inputStyle = `${inputStyle} border-dashed`
  }

  return (

    <div className="w-full">

        <label htmlFor={name} className={labelStyle}> {label} </label>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          className={`${inputStyle} ${error? "border-red-600" : "border-gray-300"}`}
          placeholder={placeholder}
          onChange={onChange}
        />
        <p className={`text-red-500 text-xs mt-1 ${error? "visible" : "hidden" }`}>{errorMsg}</p>
    </div>

  );
};

export default InputText;
