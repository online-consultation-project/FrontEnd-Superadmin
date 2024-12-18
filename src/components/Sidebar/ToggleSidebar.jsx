import React from "react";
import { LuLayoutDashboard, LuShoppingBag } from "react-icons/lu";
import { FaStethoscope, FaUserCircle, FaCalendarAlt, FaBell } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../images/CureConnect.png"; // Path to your logo
import {  IoSettings } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

const navItems = [
  { icon: LuLayoutDashboard, text: "Dashboard", path: "/home" },
    { icon: FaStethoscope, text: "Doctors", path: "/doctors" },
    { icon: FaUserCircle, text: "User Management", path: "/userdetails" },
    { icon: FaCalendarAlt, text: "Appointments", path: "/appointments" },
    { icon: LuShoppingBag, text: "Medical Store", path: "/pharmacy" },
    { icon: FaBell, text: "Notifications", path: "/notifications" },
    { icon: IoSettings, text: "Settings", path: "/settings" },
];

const ToggleSidebar = ({ isOpen, toggleSidebar }) => {

const navigate = useNavigate()

  const handleLogout = () =>{
    localStorage.clear()
    navigate("/")
  }

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-blue-950 shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Logo Section */}

      {/* Close Button */}
      <div className="flex justify-end px-4 pt-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-400 text-2xl"
        >
          &times;
        </button>
      </div>
      <div className="flex items-center justify-center px-4 pb-4 border-b border-gray-300">
        <img src={Logo} alt="Logo" className="h-14 w-auto" />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-2 pt-2 ">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-3 pl-5 p-3 hover:bg-blue-500 hover:border-l-8 border-white hover:text-white text-gray-400"
          >
            <item.icon className="text-xl" />
            <span>{item.text}</span>
          </Link>
        ))}
        <div onClick={handleLogout} className="flex items-center space-x-3 pl-5 p-3 text-gray-400 hover:bg-blue-500  hover:text-white hover:border-l-8 border-white hover:shadow cursor-pointer">
            <span>
              <BiLogOut className="h-5 w-5 text-xl" />
            </span>
            <span className="font-medium">
              Log Out
            </span>
          </div>
      </div>
    </div>
  );
};

export default ToggleSidebar;
