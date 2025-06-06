import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuLayoutDashboard, LuShoppingBag } from "react-icons/lu";
import {
  FaBell,
  FaCalendarAlt,
  FaStethoscope,
  FaUserCircle,
} from "react-icons/fa";
import { IoBarChart, IoSettings } from "react-icons/io5";
import Logo from "../../images/CureConnect.png";
import HeaderMain from "../Header/HeadersComponent";
import { BiLogOut } from "react-icons/bi";

const navItems = [
  { icon: LuLayoutDashboard, text: "Dashboard", path: "/home" },
  { icon: FaStethoscope, text: "Doctors", path: "/doctors" },
  { icon: FaUserCircle, text: "User Management", path: "/userdetails" },
  { icon: FaCalendarAlt, text: "Appointments", path: "/appointments" },
  // { icon: LuShoppingBag, text: "Medical Store", path: "/pharmacy" },
  { icon: FaBell, text: "Reports", path: "/notifications" },
  { icon: IoSettings, text: "Change Password", path: "/settings" },
];

const Sidebar = () => {

  const navigate = useNavigate()

  const handleLogout = () =>{
    localStorage.clear()
    navigate("/")
  }

  return (
    <div>
      <div className="relative top-0 sm:hidden">
        <HeaderMain />
      </div>

      <div className="relative bg-blue-950 h-screen w-full border-r border-gray-200 shadow-lg flex flex-col max-sm:hidden">
        {/* Logo Section */}
        <div className="p-5 border-b border-gray-200">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Company Logo" className="h-16 w-44" />
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 pl-6 p-4 transition-all duration-200 
              ${
                isActive
                  ? "bg-blue-500 text-white border-l-8 border-white"
                  : "hover:bg-blue-500 hover:text-white hover:border-l-8 border-white hover:shadow text-gray-400"
              }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.text}</span>
            </NavLink>
          ))}
          <div
            onClick={handleLogout}
            className="flex items-center space-x-3 pl-5 p-3 text-gray-400 hover:bg-blue-500  hover:text-white hover:border-l-8 border-white hover:shadow cursor-pointer"
          >
            <span>
              <BiLogOut className="h-5 w-5 text-xl" />
            </span>
            <span className="font-medium">Log Out</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
