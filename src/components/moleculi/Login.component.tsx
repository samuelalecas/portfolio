import { Button } from '../atoms/Button.component'
import InputText from '../atoms/InputText.component'

export const LoginForm = () => {
  return (
    <form action="" className='flex flex-col gap-4'>
        <InputText label="Usuario"/>
        <InputText type="password" label='Contraseña'/>
        <Button name="Enviar"/>
    </form>
  )
}
