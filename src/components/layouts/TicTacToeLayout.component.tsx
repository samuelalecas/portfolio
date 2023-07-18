// Con el layout tienes una estructura base en la que crear tus diseños

// Se crea una interfaz declarando de qué tipo será el children
interface TicTacToeLayoutProps {
    children: any,
    turn: string,
}

const TicTacToeLayout: React.FC<TicTacToeLayoutProps> = ({children, turn}) => {

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
      <div className="flex flex-wrap p-5 w-[26.5rem] bg-white shadow-lg">
        {children}
      </div>
      <p className="text-2xl font-bold mt-4">{turn}'s TURN</p>
    </div>
    </>
  );
};

export default TicTacToeLayout;
