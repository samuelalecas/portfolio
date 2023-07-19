import InputText from "../atoms/inputText/InputText.component";
import { Button } from "../atoms/button/Button.component";

export const Contact = () => {
  return (
    <section className="w-full h-full py-16 border-t-2 border-violet-200 flex justify-center items-center">
      <div className="w-full md:w-[900px] px-8">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mr-16">
            <h1 className="text-4xl mb-6 text-blue-950">Contact</h1>
            <h2 className="text-blue-950 mb-6">
              ¡Ponte en contacto conmigo para lo que necesites!
            </h2>
          </div>
          <form
            action=""
            className="w-full md:w-2/3 flex flex-col items-end gap-2"
          >
            <InputText label="Nombre" />
            <InputText label="Correo" />
            <InputText label="Asunto" />
            <div className="block mt-8 w-full md:w-24">
              <Button name="Enviar" width="full" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
