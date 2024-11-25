import React from "react";
import Logo from "../../assets/logo final.png";

const SidebarDesign = () => {
  return (
    <div className="w-64 h-[100vh] fixed bg-[#0E82FD] shadow-lg shadow-slate-600">
      <div className="">
        <img src={Logo} alt="logo" className="w-44 h-14" />
      </div>

      <div></div>
    </div>
  );
};

const SidebarMain = () => {
  return (
    <div className="flex flex-row gap-2">
      <SidebarDesign />
    </div>
  );
};

export default SidebarMain;
