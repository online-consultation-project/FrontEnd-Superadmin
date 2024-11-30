import React from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../../images/CC_logo3.png";
import { IoMenu } from "react-icons/io5";
import { blackColor, primaryColor, secondaryColor, shadowColor, whiteColor } from "../Reusable Component/ColorSelector";

const navItems = [
  { name: "Home", path: "/navbar" },
  { name: "Find Doctors", path: "/doctors" },
  { name: "Online Consultations", path: "/consultations" },
  { name: "Medicines", path: "/medicines" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];



const Navbarmain = () => {
    const location = useLocation();
  return (
    <nav className={`w-full h-auto shadow-lg px-7 py-4 shadow-${shadowColor} flex flex-row flex-wrap justify-between items-center gap-5`}>
      <Link to={"/"}>
        <div className="">
          <img
            src={HeaderLogo}
            alt="logo"
            className="w-44 h-14 cursor-pointer max-sm:w-[120px] max-sm:h-[35px] sm:max-md:w-[150] sm:max-md:[48px]"
          />
        </div>
      </Link>
      <div className="flex flex-row flex-wrap justify-center gap-5 max-lg:hidden">
        {navItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <span
              className={`py-2 font-bold px-2 ${
                item.path === location.pathname
                  ? `bg-gradient-to-r from-${primaryColor} to-${secondaryColor} text-${whiteColor} hover:border-none rounded`
                  : `bg-${whiteColor} text-${blackColor} `
              } hover:border-b-[3px] transition-all duration-150 border-[#0E82FD]`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      
        <IoMenu className="text-2xl cursor-pointer lg:hidden"/>
    
    </nav>
  );
};

export default Navbarmain;
