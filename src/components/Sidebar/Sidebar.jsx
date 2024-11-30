import React from "react";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard, LuShoppingBag } from "react-icons/lu";
import {
  FaBell,
  FaCalendarAlt,
  FaStethoscope,
  FaUserCircle,
} from "react-icons/fa";
import { IoBarChart, IoSettings } from "react-icons/io5";
import Logo from "../../images/CC_logo3.png";
import HeaderMain from "../Header/HeadersComponent";

const navItems = [
  { icon: LuLayoutDashboard, text: "Dashboard", path: "/home" },
  { icon: FaStethoscope, text: "Doctors", path: "/doctors" },
  { icon: FaUserCircle, text: "User Management", path: "/userdetails" },
  { icon: FaCalendarAlt, text: "Appointments", path: "/appointments" },
  { icon: LuShoppingBag, text: "Medical Store", path: "/pharmacy" },
  { icon: IoBarChart, text: "Analytics", path: "/analytics" },
  { icon: FaBell, text: "Notifications", path: "/notifications" },
  { icon: IoSettings, text: "Settings", path: "/settings" },
];

const Sidebar = () => {
  return (
    <div>
      <div className="relative top-0 sm:hidden">
        <HeaderMain/>
      </div>

      <div className="relative bg-white h-screen w-full border-r border-gray-200 shadow-lg flex flex-col max-sm:hidden">
        {/* Logo Section */}
        <div className="p-5 border-b border-gray-200">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Company Logo" className="h-16 w-44" />
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col p-4 gap-3">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg text-gray-600 transition-all duration-200 
              ${
                isActive
                  ? "bg-gradient-to-r from-blue-900 to-blue-500 text-white"
                  : "hover:bg-gray-100 hover:shadow"
              }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.text}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;





