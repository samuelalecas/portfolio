import { Button } from "../atoms/Button.component";
import InputText from "../atoms/InputText.component";

// Para verificar un correo electrónico
const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);

export const RegisterForm = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <InputText placeholder="Nombre" />
      <InputText placeholder="Apellidos" />
      <InputText placeholder="Correo electrónico" />
      <InputText type="password" placeholder="Contraseña" />
      <InputText type="password" placeholder="Repetir contraseña" />
      <div className="flex gap-2 mt-4">
        <Button name="OK" />
        <Button name="Reset" variant="outlined" />
      </div>
    </form>
  );
};
