import { useState } from "react";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import logo from "../../assets/logo.jpg"
const Header = () => {
  const [open, setOpen] = useState(false);
  // console.log(open);
  const handleToggle = () => {
    setOpen(!open)
  }
 
  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <img className="h-12 inline" src={logo} />
        </span>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <AiOutlineMenuUnfold onClick={handleToggle} />
        </span>
      </div>

      <ul
        className={`md:flex md:items-center z-10 md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${
          open && "top-[70px] opacity-100 bg-primary text-white bg-[#2D72F3]"
        }`}
      >
        <li className="mx-4 my-6 md:my-0 ">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/course-single" target="_blank" className="text-xl hover:text-cyan-500 duration-500">
            Courses
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            ABOUT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            CONTACT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/blogs" className="text-xl hover:text-cyan-500 duration-500">
            BLOGS
          </a>
        </li>

        <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded ">
          Log in
        </button>
        <h2 className=""></h2>
      </ul>
    </nav>
  );
};

export default Header;
