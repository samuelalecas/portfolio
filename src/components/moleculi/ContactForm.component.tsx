import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import InputText from "../atoms/inputText/InputText.component";
import { Button } from "../atoms/button/Button.component";

export const ContactForm = () => {


  // const form = useRef();
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34hmzu7",
        "template_5379rm8",
        form.current as HTMLFormElement, 
        "TRwpUHcioG_HNxbxv"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full md:w-2/3 flex flex-col items-end gap-2"
    >
      <InputText label="Nombre" name="user_name" />
      <InputText label="Correo" name="user_email" />
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-blue-950">
          Mensaje
        </label>
        <textarea
          className="bg-white border-b-2 border-green-300 text-blue-950 text-sm p-2 w-full placeholder-blue-950 pl-0 focus:pl-1"
          name="message"
        />
      </div>
      <div className="block mt-8 w-full md:w-24">
        <Button
          type="submit"
          name="Enviar"
          width="full"
          value="Send"
        />
      </div>
    </form>
  );
};
