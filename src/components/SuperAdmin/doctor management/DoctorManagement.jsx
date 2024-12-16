import React from "react";
import { SubCard } from "./SubCard";
import { FaAddressCard } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { ImInfo } from "react-icons/im";
import { Link, Outlet, useLocation } from "react-router-dom";
import AdminForm from "./AdminForm";
import DoctorsMain from "./DoctorsList";
import DoctorInfoMain from "./DoctorsInformation";
import Sidebar from "../../Sidebar/Sidebar";

export const FormSection = () => {
  return <AdminForm />;
};

export const DoctorSection = () => {
  return <DoctorsMain />;
};

export const DoctorInfo = () => {
  return <DoctorInfoMain />;
};

const pharmacyMenu = [
  {
    image: <FaAddressCard className="text-2xl font-semibold" />,
    title: "Add Doctors",
    path: "/doctors",
  },
  {
    image: <FaUserDoctor className="text-2xl font-semibold" />,
    title: "Doctors",
    path: "/doctors/doctorslist",
  },
  {
    image: <ImInfo className="text-2xl font-semibold" />,
    title: "Profile",
    path: "/doctors/doctorsinfo/:_id",
  },
  
];


const DoctorComp = () => {

  const location = useLocation()

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full">
        <Sidebar />
      </div>
      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16">
        <div className=" bg-gray-200 w-full h-full">
          <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">Doctor Management</h1>
          <div className=" align-middle grid grid-cols-3 gap-8 w-full sm:max-lg:gap-5 max-sm:grid-cols-1 sm:max-[770px]: sm:max-lg:grid-cols-2 mb-6">
            {pharmacyMenu.map((value, index) => (
              <Link to={value.path} key={index}>
                <SubCard
                  props={{ ...value }}
                  className={`${
                    value.path === location.pathname
                      ? "bg-gradient-to-r from-blue-500 to-blue-900 text-white py-4 px-6 rounded-md shadow-sm justify-center sm:max-lg:gap-4 sm:max-lg:px-3 shadow-slate-600 flex gap-8"
                      : "bg-white py-4 px-6 rounded-md shadow-sm justify-center sm:max-lg:gap-4 sm:max-lg:px-3 shadow-slate-600 flex gap-8 text-blue-900"
                  }`}
                />
              </Link>
            ))}

          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorComp;
