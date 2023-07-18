// Con el layout tienes una estructura base en la que crear tus diseños

// Se crea una interfaz declarando de qué tipo será el children
interface AuthLayoutProps {
    children: any,
}

const AuthLayout: React.FC<AuthLayoutProps> = ({children}) => {

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="grid p-5 border w-1/2 bg-white gap-6 shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
