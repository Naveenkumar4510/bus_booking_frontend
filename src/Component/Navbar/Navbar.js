import React from "react";
import { FaBusAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate=useNavigate();
  return (
    <div className=" border-b">
      <nav className="p-3
      ">
        <div className="flex space-x-3 justify-between">
          <div className="flex space-x-4 text-orange-400">
            <span className="text-2xl text-bold ml-4
          ">EasyBus </span><span className="text-2xl py-2"><FaBusAlt /></span></div>
          <div className="cursor-pointer text-lg ">
            <a  className="text-orange-400 no-underline" onClick={()=>navigate
              ({
                pathname: `${process.env.PUBLIC_URL}/login`,
              })
            }>Login</a>
            <a className="pl-3 text-orange-400 no-underline " onClick={()=>navigate 
              ({
                pathname: `${process.env.PUBLIC_URL}/register`,
              })
            }>Signup</a>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
