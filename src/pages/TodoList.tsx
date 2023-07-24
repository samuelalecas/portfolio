import { useState } from "react";
import { TodoInputText } from "../components/atoms/todoInputText/TodoInputText.component";
import { TodoItem } from "../components/moleculi/TodoItem.component";
import { Header } from "../components/moleculi/Header.component";
import { Footer } from "../components/moleculi/Footer.component";

const TodoList = () => {
  const [itemList, setItemList] = useState("");
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList") || "{}") || []);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    let arrayBuffer = [...todoList];
    arrayBuffer.push(itemList);
    localStorage.setItem("todoList", JSON.stringify(arrayBuffer));
    setTodoList(arrayBuffer);
    setItemList("");
  };

  const handleErase = (index: number) => {
    let arrayBuffer = [...todoList];
    arrayBuffer.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(arrayBuffer));
    setTodoList(arrayBuffer);
  };

  let buttonStyle = `${itemList === "" ? "opacity-30" : "opacity-100 hover:bg-blue-800" } text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 focus:outline-none`;

  if (!localStorage.getItem("todoList")) {
    localStorage.setItem("todoList", "[]");
  }

  return (
    <>
    <Header />
      <main className="max-w-screen max-h-screen w-screen h-screen flex items-center justify-center bg-slate-100">
        <div className="w-full m-4 p-6 bg-white rounded-lg shadow-lg md:w-2/3 max-w-[500px] ">
          <form
            action=""
            className="flex gap-4 mb-4"
            onSubmit={handleClick}
          >
            {/* {console.log("localStorage con get -> " + localStorage.getItem("todoList"))}
            {console.log("Estado -> " + todoList)} */}
            <TodoInputText
              value={itemList}
              onChange={(e) => setItemList(e.target.value)}
            />
            {/* <input
              type="text"
              className="rounded-sm bg-slate-100 w-full pl-4"
              value={itemList}
              onChange={(e) => setItemList(e.target.value)}
            /> */}
            <button
              type="submit"
              className={buttonStyle}
              disabled={!itemList}
            >
              Añadir
            </button>
          </form>
          {todoList.map((item: string, index: number) => (
            <TodoItem
              key={index}
              text={item}
              onClick={() => handleErase(index)}
            />
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default TodoList;
