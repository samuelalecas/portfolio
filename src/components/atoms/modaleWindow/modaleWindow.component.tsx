import xIcon from "../../../assets/x-tictactoe.svg";
import oIcon from "../../../assets/o-tictactoe.svg";

interface WinnerWindowPros {
  type?: string;
  winner?: string;
  onClick: () => void;
}

export const WinnerWindow: React.FC<WinnerWindowPros> = ({
  type = "winner",
  winner,
  onClick,
}) => {
  let window;
  if (type === "draw") {
    window = (
      <>
        <h1 className="font-bold text-xl text-blue-950 mb-4">Draw!</h1>
      </>
    );
  }
  if (type === "winner") {
    window = (
      <>
        <img src={winner === "X" ? xIcon : oIcon} alt="X" className="w-16" />
        <h1 className="font-bold text-xl text-blue-950 mb-4">wins!</h1>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white aspect-square w-1/2 sm:w-[200px] rounded-lg shadow-xl absolute m-auto left-0 right-0 top-72 z-10">
        {window}
        <button
          onClick={onClick}
          className="border-2 border-blue-950 px-3 py-1 rounded-md font-bold text-blue-950 hover:bg-blue-950 hover:text-green-300 transition duration-300 ease-in-out"
        >
          Play again
        </button>
      </div>
      {/* Fondo oscurecido */}
      <div className="bg-gray-200 w-screen h-screen absolute z-1 opacity-40"></div>
    </>
  );
};
