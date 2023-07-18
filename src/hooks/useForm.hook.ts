import { useState } from "react";

export const useForm = <T>(initialData: T) => {

// Tenemos un estado donde se almacena un objeto
// y ese objeto viene dada su interfaz desde el exterior
  const [formData, setFormData] = useState<T>(initialData);

// Función que va almacenando en el objeto cada vez que
// se haga un cambio dentro de un campo de texto  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Va a utilizar el objeto creado hasta la fecha...
    setFormData((prev) => ({
      ...prev,
      // Tomará como key el valor del name, y de value el value del target
      [e.target.name]: e.target.value,
    }));
  };

  // Función para resetear todos los campos
  const resetForm = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setFormData(initialData);
  }

  return {
    formData,
    onChange,
    resetForm
  };
};
