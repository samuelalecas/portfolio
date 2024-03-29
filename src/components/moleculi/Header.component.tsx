// import { FiMoon } from "react-icons/fi";
// import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../atoms/button/Button.component";
import { useNavigate } from "react-router-dom";
import avatarImg from "../../assets/avatar.png";
import { useContext } from 'react';
import { AppContext } from "../../contexts/App.context";

export const Header = () => {
  const navigate = useNavigate();

  const {setUser, setToken} = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    setUser(null);
  }

  return (
    <header className="w-full h-20 border-b-2 border-violet-200 flex justify-center items-center fixed bg-white z-10">
      <div className="w-[900px] grid grid-cols-6 md:grid-cols-12">
        <div className="col-span-4 md:col-span-5 ml-4 flex items-center">
          {/* <div className="col-span-5 border-none ml-4 md:border-solid border-r-2 border-violet-200 flex items-center"> */}
          <button onClick={() => navigate("/")} className="flex items-center">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-14 rounded-full m-2"
            />
            <h1 className="font-display ml-2 text-2xl font-medium text-blue-950">
              Samuel Alegre
            </h1>
          </button>
        </div>
        <div className="hidden md:block col-span-5">
          {/* <ul className="flex h-full justify-center items-center gap-4 ">
            <li>
              <a
                className="font-medium font-blue-950 hover:text-green-300 hover:underline"
                href=""
              >
                01 Section
              </a>
            </li>

            <li>
              <a
                className="font-medium font-blue-950 hover:text-green-300 hover:underline"
                href=""
              >
                02 Section
              </a>
            </li>

            <li>
              <a
                className="font-medium font-blue-950 hover:text-green-300 hover:underline"
                href=""
              >
                03 Section
              </a>
            </li>
          </ul> */}
        </div>
        <div className="col-span-2 h-full flex justify-center items-center border-l-2 border-violet-200">
          {/* <span className="hidden md:block mr-4"> */}
          {/* <span className="mr-4"> */}

            <Button
              name={!!localStorage.user ? "Logout" : "Login"}
              variant={!!localStorage.user ?  "outlined" : "default" }
              onClick={!!localStorage.user ? () => logout() : () => navigate("/login") }
              width="24"
            />
          {/* </span> */}
          {/* <button className="hidden md:block  hover:opacity-100 opacity-50">
            <FiMoon fontSize="1.2rem" />
          </button> */}
          {/* <button className="block md:hidden  hover:opacity-100 opacity-50 text-blue-950">
            <RxHamburgerMenu fontSize="1.8rem" />
          </button> */}
        </div>
      </div>
    </header>
  );
};
