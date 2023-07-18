import { useState } from "react";
import { Button } from "../atoms/button/Button.component";
import InputText from "../atoms/inputText/InputText.component";
import { useForm } from "../../hooks/useForm.hook";

// Para verificar un correo electrónico
const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);

// Interfaz a modo de plantilla para los valores de la persona
interface FormI {
  name: string;
  surname: string;
  email: string;
  password1: string;
  password2: string;
}

// Se inicializa la interfaz con valores vacíos
const initialFormState: FormI = {
  name: "",
  surname: "",
  email: "",
  password1: "",
  password2: "",
};

export const RegisterForm = () => {
  // Estado para almacenar la información del usuario
  const { formData, onChange, resetForm } = useForm<FormI>(initialFormState);

  // Para el manejo de errores
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleClick = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    // Manejo de error por si una contraseña no coincide con otra
    setError(formData.password1 !== formData.password2 ? true : false);

    // Manejo de error si el correo es incorrecto
    const isValidEmail = emailRegex.test(formData.email);
    setEmailError(!isValidEmail);
  };

  const handleReset = () => {
    resetForm();
    setError(false);
    setEmailError(false);
  };

  return (
    <form action="" className="flex flex-col gap-4">
      <InputText
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={(e) => onChange(e)}
      />
      <InputText
        name="surname"
        placeholder="Apellidos"
        value={formData.surname}
        onChange={(e) => onChange(e)}
      />
      <InputText
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        error={emailError}
        onChange={(e) => onChange(e)}
        errorMsg={"El formato del correo no es válido"}
      />
      <InputText
        type="password"
        name="password1"
        placeholder="Contraseña"
        value={formData.password1}
        onChange={(e) => onChange(e)}
      />

      <InputText
        type="password"
        name="password2"
        placeholder="Repetir contraseña"
        value={formData.password2}
        error={error}
        onChange={(e) => onChange(e)}
        errorMsg={"Ambas contraseñas deben ser idénticas"}
      />
      <div className="flex gap-2 mt-4">
        <Button name="OK" onClick={handleClick} />
        <Button name="Reset" variant="outlined" onClick={handleReset} />
      </div>
    </form>
  );
};
