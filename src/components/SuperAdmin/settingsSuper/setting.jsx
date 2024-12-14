import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import ChangePassword from "../dashboardMain/ChangePassword";

const SettingComp = () => {

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full">
        <Sidebar />
      </div>
      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16">
        <div className="w-full min-h-screen gap-4">
          <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
            Settings
          </h1>
          <div>
            <ChangePassword/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SettingComp