import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <img className="h-12 inline" src={logo} />
        </span>

        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={handleToggle}
        >
          <AiOutlineMenuUnfold onClick={handleToggle} />
        </span>
      </div>

      <ul
        className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute md:bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 top-[-400px] md:opacity-100 opacity-0  transition-all ease-in duration-500 ${
          open && "top-[70px] opacity-100  text-white bg-[#2D72F3] z-auto"
        }`}
      >
        <li className="mx-4 my-6 md:my-0 ">
          <Link
            to="/"
            className="text-[14px] font-bold md:hover:text-[#256CF0] duration-500"
          >
            HOME
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/about"
            className="text-[14px] font-bold md:hover:text-[#256CF0] duration-500"
          >
            ABOUT
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/teachers"
            className="text-[14px] font-bold md:hover:text-[#256CF0] duration-500"
          >
            TEACHERS
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/courses"
            className="text-[14px] font-bold md:hover:text-[#256CF0] duration-500"
          >
            ALL COURSES
          </Link>
        </li>
     
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/gallery"
            className="text-[14px] font-bold md:hover:text-[#256CF0] duration-500"
          >
            OUR GALLERY
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/allBlogs"
            className="text-[14px] font-bold md:hover:text-[#256CF0] duration-500"
          >
            BLOGS
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/contact"
            className="text-[14px] font-bold md:hover:text-[#256CF0] duration-500"
          >
            CONTACT
          </Link>
        </li> 
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/admin"
            className="text-[14px] font-bold md:hover:text-[#256CF0] duration-500"
          >
           Dashbord
          </Link>
        </li>
        <Link
          to={"/login"}
          className="bg-[#256CF0] text-[14px] font-bold text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-[#256CF0] rounded "
        >
          Log in
        </Link>
        <h2 className=""></h2>
      </ul>
    </nav>
  );
};

export default Header;
