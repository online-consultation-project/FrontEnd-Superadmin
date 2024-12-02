import React from "react";
import { SubCard } from "./doctor management/SubCard";
import { FaAddressCard } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { ImInfo } from "react-icons/im";
import { Link, Outlet } from "react-router-dom";
import AdminForm from "./doctor management/AdminForm";
import DoctorsMain from "./doctor management/DoctorsList";
import DoctorInfoMain from "./doctor management/DoctorsInformation";
import Sidebar from "../Sidebar/Sidebar";

export const FormSection = () => {
  return <AdminForm />;
};

export const DoctorSection = () => {
  return <DoctorsMain />;
};

export const DoctorInfo = () => {
  return <DoctorInfoMain />;
};

const DoctorComp = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full">
        <Sidebar />
      </div>
      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16">
        <div className=" bg-gray-200 w-full h-full">
          <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">Doctor Management</h1>
          <div className=" align-middle grid grid-cols-3 gap-8 w-full sm:max-lg:gap-5 max-sm:grid-cols-1 sm:max-[770px]: sm:max-lg:grid-cols-2 mb-7">
            <Link to={"/doctors"}>
              <SubCard
                props={{
                  image: <FaAddressCard className="text-2xl font-semibold" />,
                  title: "Add Doctors",
                }}
              />
            </Link>
            <Link to={"/doctors/doctorslist"}>
              <SubCard
                props={{
                  image: <FaUserDoctor className="text-2xl font-semibold" />,
                  title: "Doctors",
                }}
              />
            </Link>
            <Link to={"/doctors/doctorsinfo"}>
              <SubCard
                props={{
                  image: <ImInfo className="text-2xl font-semibold" />,
                  title: "Profile",
                }}
              />
            </Link>
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
