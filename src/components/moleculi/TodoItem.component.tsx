import { useState } from "react";
// import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
// import { TodoInputText } from "../atoms/inputText/TodoInputText.component";

interface TodoItemProps {
  text: string;
  onClick: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ text, onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  let style = `m-4 ${isChecked ? "line-through" : ""} cursor-pointer`;

  return (
    <div className="grid grid-cols-12 items-center border-b mb-2">
      <label className="col-span-11">
        <input
          type="checkbox"
          name="item"
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className={style}>{text}</span>
      </label>
      <div className="col-span-1 flex justify-end">
        {/* <button className="p-3 opacity-60 hover:opacity-100">
          <FiEdit />
        </button> */}
        <button
          className="p-3 opacity-60 hover:opacity-100 hover:text-red-600"
          onClick={onClick}
        >
          <RiDeleteBin7Line />
        </button>
      </div>
    </div>
  );
};
