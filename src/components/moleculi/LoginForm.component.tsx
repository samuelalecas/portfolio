import { Button } from '../atoms/Button.component'
import InputText from '../atoms/InputText.component'

export const LoginForm = () => {
  return (
    <form action="" className='flex flex-col items-center gap-4'>
        <InputText placeholder="Usuario"/>
        <InputText type="password" placeholder='Contraseña'/>
        <Button name="Enviar" width='36'/>
    </form>
  )
}
