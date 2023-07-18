import { FormEvent, useState, useContext } from 'react';
import { Button } from "../atoms/button/Button.component";
import InputText from "../atoms/inputText/InputText.component";
import { useForm } from "../../hooks/useForm.hook";
import { useNavigate } from 'react-router-dom';

// Para verificar un correo electrónico
const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);

// Interfaz a modo de plantilla para los valores de la persona
interface FormI {
  name: string;
  password: string;
  email: string;
  role: string;
}

// Se inicializa la interfaz con valores vacíos
const initialFormState: FormI = {
  name: "",
  email: "",
  password: '',
  role: 'ADMIN_ROLE',
};

const isValidEmail = (email: string):boolean => {
  const isValid = emailRegex.test(email);
  return isValid;
}

export const RegisterForm = () => {

  const navigate = useNavigate();

  // Estado para almacenar la información del usuario
  const { formData, onChange, resetForm } = useForm<FormI>(initialFormState);

  // Para el manejo de errores
  const [emailError, setEmailError] = useState(false);

  const onSubmit = async (e?: FormEvent) => {
    e?.preventDefault(); // Para evitar la recarga de la página
    try {
      const resp = await fetch(
        "https://noderestserver-production-241a.up.railway.app/api/v1/users/",
        {
          method: "POST",
          headers: { "content-type": "application/json; charset=UTF-8" },
          body: JSON.stringify(formData),
        }
      );
      const data = await resp.json();
      if (!data?.errors){
        navigate("/login");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (isValidEmail(formData.email)){
      onSubmit();
    } else {
      setEmailError(true);
    }
  };

  const handleReset = () => {
    resetForm();
    setEmailError(false);
  };

  return (
    <form action="" className="flex flex-col gap-4" onSubmit={handleClick}>
      <InputText
        name="name"
        placeholder="Nombre"
        value={formData.name}
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
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={(e) => onChange(e)}
      />

      <div className="flex gap-2 mt-4">
        <Button name="OK" type="submit"/>
        <Button name="Reset" variant="outlined" onClick={handleReset} />
      </div>
    </form>
  );
};
